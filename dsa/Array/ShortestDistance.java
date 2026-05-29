public class ShortestDistance{
    // Write a program to find out the shortest distance between two even positive integers in an array arr and print the distance. If there is one or zero even positive integer in the array then return -1.
    public static int shortestDistance(int arr){
        
        int res=arr.length;
        for(int i=0;i<arr.length;i++){
            int firstEven=-1;
          
            if (arr[i]%2==0){

               int secEven=-1;
               for(int j=i+1;j<n;j++){
                
                   if(arr[j]%2==0){
                   secEven=j;
                    res=min(res,j-i);
                   }
               }
            }
            return -1;
        }
    }
    public static void main(String []args){

    }
}