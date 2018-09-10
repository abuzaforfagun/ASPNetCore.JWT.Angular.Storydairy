using Microsoft.AspNetCore.Identity.UI.Pages.Account.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using StoryDairy.Core.Model;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using StoryDairy.Core.Resources;
using StoryDairy.Core.Ripository;

namespace StoryDairy
{
    [Route("api/[controller]")]
    public class AuthController: ControllerBase
    {
        private IConfiguration _configuration;
        private IUnitOfWork _unitOfWork;

        public AuthController(IConfiguration configuration, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _configuration = configuration;
        }
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]LoginResource user)
        {
            if (_unitOfWork.UserRepository.Get(user.UserId, user.Password) != null)
            {
                return Ok(new { Token = GenerateToekn() });
            }
            else
            {
                return Unauthorized();
            }
        }

        private string GenerateToekn()
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var tokeOptions = new JwtSecurityToken(
                issuer: _configuration.GetValue<string>("Url"),
                audience: _configuration.GetValue<string>("Url"),
                claims: new List<Claim>(),
                expires: DateTime.Now.AddDays(30),
                signingCredentials: signinCredentials
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return tokenString;
        }
    }
}
