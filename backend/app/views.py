from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.urls import get_resolver
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from .models import Profile, Tour, Comment, Photos
from .serializers import *


# Vista para obtener todos los perfiles (No requiere autenticación)
@api_view(['GET', 'POST'])
def profile_view(request):
    if request.method == 'GET':
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return JsonResponse(serializer.data, safe=False)

# Vista para obtener fotos por nombre del tour (No requiere autenticación)
@api_view(['GET'])
def get_photos_by_tour_name(request, tour_name):
    tours = Tour.objects.filter(tour_name__icontains=tour_name)
    if not tours.exists():
        return JsonResponse({"error": "No tours found"}, status=404)

    photos = Photos.objects.filter(tour__in=tours)
    serialized_photos = PhotosSerializer(photos, many=True)
    return JsonResponse(serialized_photos.data, safe=False)


# Vista para obtener comentarios de un tour específico (No requiere autenticación)
@api_view(['GET'])
def comments_get(request, tour_name):
    tours = Tour.objects.filter(tour_name__icontains=tour_name)
    if not tours.exists():
        return JsonResponse({"error": "No tours found"}, status=404)

    comments = Comment.objects.filter(tour__in=tours)
    serialized_comments = CommentSerializer(comments, many=True)
    return JsonResponse(serialized_comments.data, safe=False)


def show_active_urls(request):
    urls = [str(url.pattern) for url in get_resolver().url_patterns]
    return JsonResponse({"active_urls": urls})

@api_view(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
@csrf_exempt
@permission_classes([IsAuthenticated])
def create_comment(request):
    return HttpResponse("✅ Django recibió el POST", status=200)