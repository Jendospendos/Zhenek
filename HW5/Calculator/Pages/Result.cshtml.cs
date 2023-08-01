using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text;

namespace Calculator.Pages
{
    public class ResultModel : PageModel
    {
        public string FirstNumber { get; set; } = string.Empty;

        public string SecondNumber { get; set; } = string.Empty;

        public string Operation { get; set; } = string.Empty;

        public string Result { get; set; } = string.Empty;

        public List<string> Line { get; set; } = new();

        public void OnGet(string firstNumber, string secondNumber, string operation)
        {
            FirstNumber = firstNumber;
            SecondNumber = secondNumber;
            Operation = operation;
            Proceed();

        }
        private void Proceed()
        {
            switch (Operation)
            {
                case "addition":
                    Addition();
                    break;
                case "subtraction":
                    Subtraction();
                    break;
                default:
                    throw new ArgumentException("Invalid operation");
            }
        }
        private void Addition()
        { 
            if(SecondNumber.Length > FirstNumber.Length)
            {
                (FirstNumber, SecondNumber) = (SecondNumber, FirstNumber); 
            }


            if (Result.Length == 0)
            {
                Result = "0";
            }


            long result = long.Parse(FirstNumber) + long.Parse(SecondNumber);
            Result = result.ToString();
            
        }
        
        private void Subtraction()
        {

            if(Result.Length == 0) 
            {
                Result = "0";
            }

            long result = long.Parse(FirstNumber) - long.Parse(SecondNumber);
            Result = result.ToString();
            if (SecondNumber.Length > FirstNumber.Length)
            {
                (FirstNumber, SecondNumber) = (SecondNumber, FirstNumber);
                //Result = $"-{Result}";
            }

        }
    }
}


