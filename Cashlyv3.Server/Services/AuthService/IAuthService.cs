namespace Cashlyv3.Server.Services.AuthService;

public interface IAuthService
{
    Task<ServiceResponse<int>> Register(User user, string password);
    Task<bool> UserExists(string username);
    Task<ServiceResponse<string>> Login(string username, string password);
    Task<ServiceResponse<bool>> ChangePassword(int userId, string newPassword);
    Task<ServiceResponse<bool>> DeleteUser(int userId);
}
