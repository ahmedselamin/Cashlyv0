namespace Cashlyv3.Server.Models;

public class UseLogin
{
    [Required]
    public string Username { get; set; } = string.Empty;
    [Required]
    public string Password { get; set; } = string.Empty;
}
