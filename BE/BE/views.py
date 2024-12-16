from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Profile, RekapanHarian, GajiPegawai, HutangPiutang, KomentarDiskusi, ForumDiskusi, AnalisisKeuangan
from .serializer import ProfileSerializer, RekapanHarianSerializer, GajiPegawaiSerializer, HutangPiutangSerializer, KomentarDiskusiSerializer, ForumDiskusiSerializer, AnalisisKeuanganSerializer, DaftarSerializer, MasukSerializer, KeluarSerializer

class MasukAPIView(generics.GenericAPIView):
    serializer_class = MasukSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response({
            'user': serializer.validated_data['user'],
            'tokens' : serializer.validated_data['tokens']
        }, status=status.HTTP_200_OK)
    
class KeluarAPIView(generics.GenericAPIView):
    serializer_class = KeluarSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            request.user.auth_token.delete()
        except Exception as e:
            return Response({"detail": "Failed to logout"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class DaftarAPIView(generics.ListCreateAPIView):
    serializer_class = DaftarSerializer

    def post(self, request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        return Response(user_data, status=status.HTTP_201_CREATES)
# Create your views here.
