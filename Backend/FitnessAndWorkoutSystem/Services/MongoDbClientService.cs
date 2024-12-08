using MongoDB.Driver;

namespace FitnessAndWorkoutSystem.Services
{
    public class MongoDbClientService
    {
        public IMongoDatabase database;

        public MongoDbClientService()
        {
            var settings = MongoClientSettings.FromConnectionString(Environment.GetEnvironmentVariable("MONGODB_CONNECTION_STRING"));

            settings.ServerApi = new ServerApi(ServerApiVersion.V1);

            var mongoClient = new MongoClient(settings);
            database = mongoClient.GetDatabase("FitnessAndWorkoutSystemDb");
        }

    }
}
