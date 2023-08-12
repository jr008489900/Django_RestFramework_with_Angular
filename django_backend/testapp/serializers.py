from rest_framework import  serializers
from .models import Product
# Serializers define the API representation.
class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['name','description','price','created_at' ]