#include "factorial-service.h"
extern "C" int factorial(int n) {
  FactorialService factorialService;
  return factorialService.factorial(n);
}