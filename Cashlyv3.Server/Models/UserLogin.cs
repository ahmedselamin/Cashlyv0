﻿namespace Cashlyv3.Server.Models;

public class UserLogin
{
    [Required]
    public string Username { get; set; } = string.Empty;
    [Required]
    public string Password { get; set; } = string.Empty;
}
