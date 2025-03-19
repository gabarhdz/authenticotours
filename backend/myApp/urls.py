from django.urls import path, include
from .views import *

urlpatterns = [
    path('tours/', get_tours.as_view(),name="get_all_tours"),
    path('tours/<str:tour_name>/',get_specific_tours.as_view(), name="get_a_specific_tour")
]
