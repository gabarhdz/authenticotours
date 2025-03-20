from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *
# Create your views here.
class get_tours(APIView):
    def get(self,request):
        tours = Tour.objects.all()
        serializer = TourSerializer(tours,many=True)
        return JsonResponse(serializer.data,safe=False)

class get_specific_tours(APIView):
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