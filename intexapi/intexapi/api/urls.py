from api import views
from django.urls import path


urlpatterns = [
    # path('category/', views.CategoryList.as_view()),
    # path('category/<int:pk>/', views.CategoryDetail.as_view()),
    # path('product/', views.ProductList.as_view()),
    # path('product/<int:pk>/', views.ProductDetail.as_view()),
    # path('CreateSale/', views.CreateSale.as_view())
    path('campaign/', views.CampaignList.as_view()),
    path('campaign/<int:pk>/', views.CampaignDetails.as_view()),
    path('donation/', views.DonationList.as_view()),
    path('donation/<int:pk>/', views.DonationDetails.as_view()),
    path('update/', views.UpdateList.as_view()),
    path('update/<int:pk>/', views.UpdateDetails.as_view()),
]
