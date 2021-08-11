#include<iostream>
using namespace std;

int main() {
	int n;
	cin>>n;

	for(int i=1; i<=n; i++){
		//num
		for(int num=1; num<=i; num++){
			cout<<num;
		}
		//stars
		for(int st=1; st<=n-i; st++){
			cout<<"*";
		}
		cout<<endl;
	}
}
