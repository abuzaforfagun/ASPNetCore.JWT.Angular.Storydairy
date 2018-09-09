using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using StoryDairy.Core.Model;
using StoryDairy.Core.Resources;
using StoryDairy.Core.Ripository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StoryDairy
{
    [Route("api/[controller]")]
    public class StoriesController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public StoriesController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }
        [HttpPost]
        public IActionResult Post([FromBody] StoryResource story)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var _story = mapper.Map<Story>(story);
            unitOfWork.StoryRepository.Add(_story);
            unitOfWork.Done();
            return Ok();
        }
    }
}
