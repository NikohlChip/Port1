#include <iostream>
#include <vector>
using namespace std;
 
int main(){
  int N, Y;
  int a,b,c;
  bool flag = false;
  cin >> N >> Y;
  
  for(int i = 0; i <= N; i++){
    for(int j = 0; j <= N - i; j++){
      for(int k = 0; k <= N - (i + j); k++){
        if((i+j+k)==N && ((i*10000)+(j*5000)+(k*1000)==Y)){
          a = i;
          b = j;
          c = k;
          flag = true;
        }
      }
    }
  }
  
  if(flag==false){
    a = -1;
    b = -1;
    c = -1;
  }
           
  cout << a << " " << b << " " << c << " " << endl;
 
  return 0;
}