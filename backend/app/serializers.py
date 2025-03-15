from rest_framework import serializers
from .models import Profile, Tour, Comment, CommentCharacteristics, Reply, Includes, Photos

class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()  
    
    class Meta:
        model = Profile
        fields = '__all__'

class IncludesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Includes
        fields = '__all__'

class TourSerializer(serializers.ModelSerializer):
    includes = IncludesSerializer(many=True, read_only=True)
    
    class Meta:
        model = Tour
        fields = '__all__'

class CommentCharacteristicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentCharacteristics
        fields = ['id','characteristic_name']

class CommentSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    tour = TourSerializer(read_only=True)
    characteristics = CommentCharacteristicsSerializer(read_only=True,many=True)
    
    class Meta:
        model = Comment
        fields = '__all__'

class ReplySerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    parent_comment = CommentSerializer(read_only=True)
    
    class Meta:
        model = Reply
        fields = '__all__'

class PhotosSerializer(serializers.ModelSerializer):
    tour = TourSerializer(read_only=True)
    
    class Meta:
        model = Photos
        fields = '__all__'
