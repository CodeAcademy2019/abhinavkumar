#include <bits/stdc++.h>
using namespace std;

int main() {
    int workyards;
    int MAXPROFIT = 0;
    //inputting number of workyards
    cin>>workyards;
    if(workyards == 0) return 0;
    
    for(int i=0;i<workyards;i++){
        
        //inputting number of boxes
        int numberOfBoxes;
        cin>>numberOfBoxes;
        
        //creating an array of size numberOfBoxes with price of kruls
        int priceOfKrul[numberOfBoxes];
        
        //inputting the values of the array
        for(int j=0;j<numberOfBoxes;j++){
            cin>>priceOfKrul[j];
        }
        
        int sellingPrice = 10;
        
        int profit[numberOfBoxes];
        int cumulativeProfit[numberOfBoxes];

        
        for(int k=0;k<numberOfBoxes;k++){
            profit[k] = sellingPrice - priceOfKrul[k];
            
        }
        
        cumulativeProfit[0] = profit[0];
        
        for(int k=1;k<numberOfBoxes;k++){
            cumulativeProfit[k] = cumulativeProfit[k-1] + profit[k];
        }
        
        vector<int> cumulativeProfitVector(cumulativeProfit, cumulativeProfit + sizeof cumulativeProfit/sizeof cumulativeProfit[0]);
        
        int *it ;
        it = max_element(cumulativeProfit, cumulativeProfit + numberOfBoxes);
        //cout<<"MAX PROFIT IS "<<*it;
        MAXPROFIT+=*it;
        
    }
    cout<<"MAX PROFIT IS "<<MAXPROFIT;
}