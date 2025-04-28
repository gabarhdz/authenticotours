from django.urls import path, include
from django.views.decorators.http import require_POST
from .views import PostComment,get_general_comments,create_user,get_tours,get_specific_tours,get_specific_comments,UpdateProfilePicture,get_media,get_all_media

urlpatterns = [
    
    path('comments/post/', PostComment.as_view(), name="post_comment"),
    path('comments/',get_general_comments.as_view(),name="get_all_comments"),
    path('user/create/',create_user.as_view(),name="create_user"),
    path('profile/create/',UpdateProfilePicture.as_view(),name="create"),
    path('media/<str:ALT>',get_media.as_view(),name="get_media"),
    path('media/',get_all_media.as_view(),name="get_media"),
    path('tours/', get_tours.as_view(),name="get_all_tours"),
    path('tours/<str:tour_name>/',get_specific_tours.as_view(), name="get_a_specific_tour"),
    path('comments/<str:tour_name>/',get_specific_comments.as_view(),name="get_specific_comments"),


]
