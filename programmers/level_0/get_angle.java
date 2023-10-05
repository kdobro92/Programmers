class Solution {
    public int solution(int angle) {
        int answer = 0;
        int a = 1;
        int b = 2;
        int c = 3;
        int d = 4;
        
        if (0 < angle && angle < 90) {
            answer = a;
        } else if (angle == 90) {
            answer = b;
        } else if (90 < angle && angle < 180) {
            answer = c;
        } else if (angle == 180) {
            answer = d;
        }
             
        return answer;
    }
}