from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from sensorData.models import Temperature, Pressure, Humidity
from sensorData.serializers import temperatureSerializer, pressureSerializer, humiditySerializer

from rest_framework import permissions

# TEMPERATURE VIEWS

class TemperatureList(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, format = None):
        temperatures = Temperature.objects.all()
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
            return Temperature.objects.get(pk=pk)
        except Temperature.DoesNotExist:
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



# HUMIDITY VIEWS

class HumidityList(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, format = None):
        humidities = Humidity.objects.all()
        serializer = humiditySerializer(humidities, many = True)
        return Response(serializer.data)
    
    def post(self, request, formate=None):
        serializer = humiditySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class HumidityDetail(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def get_object(self, pk):
        try:
            return Humidity.objects.get(pk=pk)
        except Humidity.DoesNotExist:
            raise Http404
    def get(self, request, pk, format = None):
        humidity = self.get_object(pk)
        serializer = humiditySerializer(humidity)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        humidity = self.get_object(pk)
        serializer = humiditySerializer(humidity, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        humidity = self.get_object(pk)
        humidity.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)


# PRESSURE VIEWS
class PressureList(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, format = None):
        pressures = Pressure.objects.all()
        serializer = pressureSerializer(pressures, many = True)
        return Response(serializer.data)
    
    def post(self, request, formate=None):
        serializer = pressureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class PressureDetail(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def get_object(self, pk):
        try:
            return Pressure.objects.get(pk=pk)
        except Pressure.DoesNotExist:
            raise Http404
    def get(self, request, pk, format = None):
        pressure = self.get_object(pk)
        serializer = pressureSerializer(pressure)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        pressure = self.get_object(pk)
        serializer = pressureSerializer(pressure, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        pressure = self.get_object(pk)
        pressure.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)



# Create your views here.
