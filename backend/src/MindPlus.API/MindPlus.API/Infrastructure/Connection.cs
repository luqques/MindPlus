using Dapper;
using MySql.Data.MySqlClient;
using System.Runtime.InteropServices.ObjectiveC;

namespace MindPlus.Api.Infrastructure
{
    public class Connection
    {
        protected string connectionString = "Server=127.0.0.1;Port=3306;Database=mindplus;User=root;Password=root";

        protected MySqlConnection GetConnection()
        {
            return new MySqlConnection(connectionString);
        }

        protected async Task<int> Execute(string sql, object obj)
        {
            using (MySqlConnection con = GetConnection())
            {
                return await con.ExecuteAsync(sql, obj);
            }
        }
    }
}
