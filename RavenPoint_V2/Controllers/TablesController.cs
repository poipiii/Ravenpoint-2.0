using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Npgsql;
using Dapper;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Threading.Tasks;
using CsvHelper;
namespace RavenPoint_V2.Controllers;

[ApiController]
public class DynamicController : ControllerBase
{
    private readonly IConfiguration _config;

    public DynamicController(IConfiguration config)
    {
        _config = config;
    }

    [HttpPost]
    public async Task<IActionResult> Post(IFormFile file)
    {
        var modelList = new List<DynamicTableModel>();

        using (var reader = new StreamReader(file.OpenReadStream()))
        using (var csv = new CsvReader(reader,
          CultureInfo.InvariantCulture))
        {

            csv.Read();
            csv.ReadHeader();

            while (csv.Read())
            {
                var model = new DynamicTableModel();
                var record = csv.GetRecord<dynamic>();
                foreach (var property in ((IDictionary<String, Object>)record))
                {
                    model.PropertyDictionary.Add(property.Key, property.Value);
                }
            }
        }

        // Persist the list of dynamic models to the database.

        // var sqlConnStr = _config.GetConnectionString("PgSqlConnectionString");
        // using (var connection = new NpgsqlConnection(sqlConnStr))
        // {

        //     connection.Open();

        //     string insertQuery = "INSERT INTO MyTable(COLUMN1,COLUMN2...) VALUES(@Value1,@Value2...)";

        //     foreach (var model in modelList)
        //     {
        //         await connection.ExecuteAsync(insertQuery, model.PropertyDictionary);
        //     }

        //     connection.Close();
        // }

        return Ok();
    }
}