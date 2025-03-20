from django.shortcuts import render
from django.http import JsonResponse
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
    def get(self,request):
        comments = Comments.objects.all()
        serializer = CommentSerializer(comments,many=True)
        return JsonResponse(serializer.data, safe=False)

class get_specific_comments(APIView):
    def get(self,request,tour_name):
        try:
            comments = Comments.objects.filter(tour__tour_name=tour_name)
            serializer = CommentSerializer(comments,many=True)
            return JsonResponse(serializer.data,safe=False)
        except:
            return JsonResponse({"error": "Tour no encontrado"}, status=404)



class PostComment(APIView):
    http_method_names = ["post"]

    def post(self, request, *args, **kwargs):
        try:
            data = request.data

            # Intentar obtener el Tour por nombre (tour_name)
            try:
                tour = get_object_or_404(Tour, tour_name=data['tour_name'])  # Aquí buscamos por nombre
            except:
                return JsonResponse({"error": f"No Tour matches the given name: {data['tour_name']}"}, status=400)

            # Buscar el usuario
            user = get_object_or_404(User, id=data['user'])

            # Crear comentario
            comment = Comments.objects.create(
                user=user,
                tour=tour,
                title=data["title"],
                text=data["text"],
                calification=data["calification"]
            )

            # Agregar características
            characteristics_to_add = Characterisitcs.objects.filter(name__in=data.get("characterisitcs", []))
            comment.characterisitcs.set(characteristics_to_add)

            return JsonResponse({"message": "Comentario agregado exitosamente"}, status=201)

        except KeyError as e:
            return JsonResponse({"error": f"Falta el campo requerido: {str(e)}"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)