using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using StoryDairy.Core.Model;
using StoryDairy.Core.Resources;
using StoryDairy.Core.Ripository;

namespace StoryDairy
{
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private IUnitOfWork _unitOfWork;
        private IMapper _mapper;

        public UsersController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpPost]
        public IActionResult Post([FromBody] UserResource user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var _user = _mapper.Map<User>(user);
            _unitOfWork.UserRepository.Add(_user);
            try
            {
                _unitOfWork.Done();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
            return Ok(user);
        }
    }
}
