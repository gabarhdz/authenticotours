from django.urls import path
from .views import profile_view,get_photos_by_tour_name,comments_get,create_comment


urlpatterns = [
    path('profiles/', profile_view, name="profile-view"),
    path('photos/<str:tour_name>/',get_photos_by_tour_name,name='get_pics'),
    path('comments/<str:tour_name>/',comments_get,name="getComments"),
    path('comments/create/',create_comment,name="create_comment")
]
