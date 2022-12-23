#include "factorial-service.h"
int FactorialService::factorial (int n) {

  struct Vector3{
    double x;
    double y;
    double z;
  };
  Vector3 euler, velocity, acceleration, angular_velocity;
  if (n == 0 || n == 1) {
    return 1; 
  }
  else {
    return n * this -> factorial(n-1);
  }

  

}