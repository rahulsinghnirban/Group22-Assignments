#include<iostream>
using namespace std;

int main() {
	int n;
	cin>>n;

	for(int i=1; i<=n; i++){
		//spaces
		for(int sp=1; sp<=n-i; sp++){
			cout<<" ";
		}
		if(i==1 || i==n){
			for(int st=1; st<=n; st++){
				cout<<"*";
			}
			cout<<endl;
		}
		else{
			cout<<"*";
			for(int sp=1; sp<=n-2; sp++){
				cout<<" ";
			}
			cout<<"*";
			cout<<endl;
		}

	}
}
