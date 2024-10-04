using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Net.Mime.MediaTypeNames;

namespace GeneratorPasword
{
    public partial class Form1 : Form
    {
        
        
        
        public Form1()
        {

        InitializeComponent();

         
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string text = "";
            string[] simbol = new string[] { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "G", "E", "Z", "P", "O", "T", "f", "s", "b", "i", "k", "n", "i", "0", "!", "=", "+", "/", "z", "[", "]", "&", "?", "H", "y", "e", };

            Random rand = new Random();
            for (int i = 0; i < 20; i++)
            {
                text = text + simbol[ rand.Next(0, 39)];
            }

            label1.Text = text;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Clipboard.SetText(label1.Text);
        }
    }
}
