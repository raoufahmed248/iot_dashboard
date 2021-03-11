from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from sensorData.models import TempData
from sensorData.serializers import temperatureSerializer

from rest_framework import permissions

class TemperatureList(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, format = None):
        temperatures = TempData.objects.all()
        serializer = temperatureSerializer(temperatures, many = True)
        return Response(serializer.data)
    
    def post(self, request, formate=None):
        serializer = temperatureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class TemperatureDetail(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def get_object(self, pk):
        try:
            return TempData.objects.get(pk=pk)
        except TempData.DoesNotExist:
            raise Http404
    def get(self, request, pk, format = None):
        temperature = self.get_object(pk)
        serializer = temperatureSerializer(temperature)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        temperature = self.get_object(pk)
        serializer = temperatureSerializer(temperature, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        temperature = self.get_object(pk)
        temperature.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)


# Create your views here.
