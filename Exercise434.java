/*(Reading numbers until a specified sum) Write an application that asks for a number from
the user and then keeps reading integer values from the user until the sum of those integers equals
or becomes greater than the value that was input in the beginning.
*/

import java.util.Scanner;

public class Exercise434{
	public static void main(String[] args){
		Scanner userInput = new Scanner(System.in);
			System.out.print("Enter a number: ")
			int number = userInput.nextInt();
			

			while (true){
				System.out.print("Enter a number or '*' to quit: ")
				int integer = userInput.nextInt().charAt();


			}
	}

}

