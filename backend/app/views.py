from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from .models import Profile, Tour, Comment, CommentCharacteristics, Reply, Includes, Photos
from .serializers import *
# Create your views here.
@api_view(['GET','POST'])
def profile_view(request):
    if request.method == 'GET':
        Profiles = Profile.objects.all()
        serializer =  ProfileSerializer(Profiles,many = True)
        return JsonResponse(serializer.data,safe=False)
    
@api_view(['GET'])
def get_photos_by_tour_name(request, tour_name):
    tours = Tour.objects.filter(tour_name__icontains=tour_name)
    if not tours.exists():
        return JsonResponse({"error": "No tours found"}, status=404)
    
    photos = Photos.objects.filter(tour__in=tours)
    serialized_photos = PhotosSerializer(photos, many=True)
    return JsonResponse(serialized_photos.data, safe=False)

@api_view(['GET'])
def comments_get(request,tour_name):
    tours=Tour.objects.filter(tour_name__icontains=tour_name)
    if not tours.exists():
        return JsonResponse({"error": "No tours found"}, status=404)
    comment = Comment.objects.filter(tour__in=tours)
    serialized_comments = CommentSerializer(comment,many=True)
    return JsonResponse(serialized_comments.data, safe=False)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_comment(request):
    user_id = request.user.id  # Obtiene el ID del usuario autenticado
    data = request.data.copy()
    data["profile"] = user_id  # Asigna el usuario al comentario
    serializer = CommentSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)