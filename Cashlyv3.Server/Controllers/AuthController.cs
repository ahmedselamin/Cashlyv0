using Microsoft.AspNetCore.Mvc;

namespace Cashlyv3.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<ActionResult<ServiceResponse<int>>> Register(UserRegister request)
    {
        var response = await _authService.Register(
            new User
            {
                Username = request.Username
            }, request.Password);

        if (!response.Success)
        {
            return BadRequest(response.Message);
        }

        return Ok(response);
    }

    [HttpPost("login")]
    public async Task<ActionResult<ServiceResponse<string>>> Login(UserLogin request)
    {
        var response = await _authService.Login(request.Username, request.Password);

        if (!response.Success)
        {
            return BadRequest(response.Message);
        }

        return Ok(response);
    }
}
