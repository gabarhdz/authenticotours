from django.shortcuts import render
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from .models import *
from .serializers import *
# Create your views here.
class get_tours(APIView):
    permission_classes = [] 
    def get(self,request):
        tours = Tour.objects.all()
        serializer = TourSerializer(tours,many=True)
        return JsonResponse(serializer.data,safe=False)

class get_specific_tours(APIView):
    permission_classes = []
    def get(self,request,tour_name):
        try:
            tours = Tour.objects.get(tour_name=tour_name)
            serializer = TourSerializer(tours)
            return JsonResponse(serializer.data,safe=False)
        except:
            return JsonResponse({"error": "Tour no encontrado"}, status=404)
        
class get_general_comments(APIView):
    permission_classes = [] 
    def get(self,request):
        comments = Comments.objects.all()
        serializer = CommentSerializer(comments,many=True)
        return JsonResponse(serializer.data, safe=False)

class get_specific_comments(APIView):
    permission_classes = [] 
    def get(self,request,tour_name):
        try:
            comments = Comments.objects.filter(tour__tour_name=tour_name)
            serializer = CommentSerializer(comments,many=True)
            return JsonResponse(serializer.data,safe=False)
        except:
            return JsonResponse({"error": "Tour no encontrado"}, status=404)



from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

class PostComment(APIView):
    http_method_names = ["post"]
    permission_classes = [IsAuthenticated]  # Asegura que el usuario esté autenticado

    def post(self, request, *args, **kwargs):
        try:
            data = request.data

            # Intentar obtener el Tour por nombre
            tour = get_object_or_404(Tour, tour_name=data['tour_name'])

            # Obtener el usuario automáticamente a partir del request
            user = request.user

            # Crear comentario
            comment = Comments.objects.create(
                user=user,
                tour=tour,
                title=data["title"],
                text=data["text"],
                calification=data["calification"]
            )

            # Si se proporcionan characteristics, se agregan
            char_ids = data.get("characteristics", [])  # Puede ser lista vacía
            if char_ids:
                characteristics_to_add = Characterisitcs.objects.filter(id__in=char_ids)
                if characteristics_to_add.count() != len(char_ids):
                    return JsonResponse({"error": "Una o más characteristics IDs no son válidos."}, status=400)
                comment.characterisitcs.set(characteristics_to_add)

            return JsonResponse({"message": "Comentario agregado exitosamente"}, status=201)

        except KeyError as e:
            return JsonResponse({"error": f"Falta el campo requerido: {str(e)}"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

class create_user(APIView):
    http_method_names = ["post"]
    permission_classes = [] 
    def post(self, request, *args, **kwargs):
        try:
            data = request.data
            # Crear usuario
            user = User.objects.create_user(
                username=data["username"],
                password=data["password"],
            )
            user.is_active = True
            return JsonResponse({"message": "Usuario creado exitosamente"}, status=201)
        except KeyError as e:
            return JsonResponse({"error": f"Falta el campo requerido: {str(e)}"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)


class UpdateProfilePicture(APIView):
    http_method_names = ["patch"]

    def patch(self, request, *args, **kwargs):
        try:
            user = request.user
            profile = Profile.objects.get(user=user)  # Busca el perfil existente
            
            # Actualiza la foto
            if 'profile_pic' in request.FILES:
                profile.profile_pic = request.FILES['profile_pic']
                profile.save()
                return JsonResponse({
                    "message": "Foto de perfil actualizada",
                    "profile_pic": profile.profile_pic.url  # URL de la foto
                }, status=200)
            
            return JsonResponse({"error": "No se proporcionó una imagen"}, status=400)
        
        except ObjectDoesNotExist:
            return JsonResponse({"error": "El usuario no tiene perfil"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
        

class get_media(APIView):
    http_method_names = ["get"]
    permission_classes = [] 
    def get(self,request,ALT):
        media = Media.objects.filter(ALT=ALT)
        if not media.exists():
            return JsonResponse({"error": "No media found for the given alt"}, status=404)
        serializer = MediaSerializer(media,many=True)
        return JsonResponse(serializer.data,safe=False)