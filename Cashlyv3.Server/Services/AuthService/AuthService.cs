
namespace Cashlyv3.Server.Services.AuthService;

public class AuthService : IAuthService
{
    private readonly DataContext _context;

    public AuthService(DataContext context)
    {
        _context = context;
    }
    public Task<ServiceResponse<int>> Register(User user, string password)
    {
        throw new NotImplementedException();
    }
    public Task<ServiceResponse<string>> Login(string username, string password)
    {
        throw new NotImplementedException();
    }

    public Task<ServiceResponse<bool>> ChangePassword(int userId, string newPassword)
    {
        throw new NotImplementedException();
    }

    public Task<bool> UserExists(string username)
    {
        throw new NotImplementedException();
    }
    public Task<ServiceResponse<bool>> DeleteUser(int userId)
    {
        throw new NotImplementedException();
    }
}
