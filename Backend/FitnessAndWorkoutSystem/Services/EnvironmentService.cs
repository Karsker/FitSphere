namespace FitnessAndWorkoutSystem.Services
{
    public class EnvironmentService
    {
        public static void Load(string filePath)
        {
            if (!File.Exists(filePath))
            {
                Console.WriteLine("Env File not found");
                return;
            }

            foreach (var line in File.ReadAllLines(filePath))
            {
                //Console.WriteLine(line);
                var parts = line.Split(
                    '=',
                    2, StringSplitOptions.RemoveEmptyEntries);

                Console.WriteLine($"{parts[0]} : {parts[1]}");
                if (parts.Length != 2)
                    continue;
                Environment.SetEnvironmentVariable(parts[0], parts[1]);
            }
        }
    }
}
