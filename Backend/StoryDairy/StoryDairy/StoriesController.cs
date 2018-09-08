using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StoryDairy.Core.Model;
using StoryDairy.Core.Ripository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StoryDairy
{
    [Route("api/[controller]")]
    public class StoriesController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;

        public StoriesController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        [HttpPost]
        public IActionResult Post(Story story)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            unitOfWork.StoryRepository.Add(story);
            unitOfWork.Done();
            return Ok();
        }
    }
}
