import java.util.Scanner;

public class ArraySub {
    static int[] calDiff(int a[], int b[], int n, int m) {
    
      int num1=0;
      int place1=1;
      for(int i=a.length-1;i>=0;i--){
          num1+=a[i]*place1;
          place1*=10;
          
      }
      int num2=0;
      int place2=1;
      for(int i=b.length-1;i>=0;i--){
          num2+=b[i]*place2;
          place2*=10;
      }
      int res=num1-num2;
    
      int res2=res;
      int count=0;
      while(res>0){
          count++;
          res/=10;
      }
      int finalres[]=new int[count];
      for(int i=count-1;i>=0;i--){
          finalres[i]=res2%10;
          res2/=10;
      }
      return finalres;
  }
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n1 = sc.nextInt();
    int[] arr1 = new int[n1];
    for (int i = 0; i < n1; i++) arr1[i] = sc.nextInt();

    int n2 = sc.nextInt();
    int[] arr2 = new int[n2];
    for (int i = 0; i < n2; i++) arr2[i] = sc.nextInt();
    sc.close();

    int[] res = calDiff(arr1, arr2, n1, n2);
    for (int i : res) System.out.println(i);
  }
}
