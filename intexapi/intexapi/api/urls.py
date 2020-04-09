from api import views
from django.urls import path


urlpatterns = [
    # path('category/', views.CategoryList.as_view()),
    # path('category/<int:pk>/', views.CategoryDetail.as_view()),
    # path('product/', views.ProductList.as_view()),
    # path('product/<int:pk>/', views.ProductDetail.as_view()),
    path('PredictiveAPI/', views.PredictiveAPI.as_view()),
    path('QualityAPI/', views.QualityAPI.as_view()),
    path('campaign/', views.CampaignList.as_view()),
    path('campaign/<str:pk>/', views.CampaignDetails.as_view()),
    path('donation/', views.DonationList.as_view()),
    path('donation/<str:pk>/', views.DonationDetails.as_view()),
    path('update/', views.UpdateList.as_view()),
    path('update/<str:pk>/', views.UpdateDetails.as_view()),
]
