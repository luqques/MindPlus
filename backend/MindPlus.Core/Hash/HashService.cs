using System.Security.Cryptography;

namespace MindPlus.Core.Hash
{
    public class HashService
    {
        public static string Encrypt(string plainText)
        {
            using (MD5 md5 = MD5.Create())
            {
                byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(plainText);
                byte[] hashBytes = md5.ComputeHash(inputBytes);

                return Convert.ToHexString(hashBytes);
            }
        }
    }
}
