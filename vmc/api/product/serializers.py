from rest_framework import serializers
from .models import Products

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.ImageField(max_length = None, allow_empty_file = False, allow_null=True, required = False)
    class Meta:
        model = Products
        fields = ('id','name', 'description','price','image','category')