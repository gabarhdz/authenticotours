from rest_framework import serializers
from .models import *


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['profile_pic']

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ['id', 'username', 'profile']
class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = '__all__'


class IncludesSerializer(serializers.ModelSerializer):  
    class Meta:
        model = Includes
        fields = '__all__'

class RecommendationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendations
        fields = '__all__'

class TourSerializer(serializers.ModelSerializer):
    photos = MediaSerializer(many=True, read_only=True)
    includes = IncludesSerializer(many=True,read_only=True)
    recommendations = RecommendationsSerializer(many=True,read_only=True)
    class Meta:
        model =Tour
        fields = '__all__'

class CharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characterisitcs
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    characterisitcs = CharacteristicSerializer(many=True,read_only=True)
    tour = TourSerializer()
    class Meta:
        model = Comments
        fields = '__all__'
