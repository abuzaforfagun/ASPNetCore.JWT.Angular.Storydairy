using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch.Adapters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
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

        [HttpGet]
        public IActionResult Get()
        {
            var items = unitOfWork.StoryRepository.Get();
            if (items.Count() == 0)
            {
                return NoContent();
            }

            ReturnFormattedData<Story>(items);
            return ReturnFormattedData<Story>(items);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] StoryResource story)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var itemFromDb = unitOfWork.StoryRepository.Get(id);
            if (itemFromDb == null)
            {
                return NotFound();
            }
            mapper.Map<StoryResource, Story>(story, itemFromDb);
            unitOfWork.Done();
            return Ok(itemFromDb);
        }

        private IActionResult ReturnFormattedData<T>(IEnumerable<T> items)
        {
            if (Request.Headers["Content-Type"].Contains("text/plain"))
            {
                StringBuilder respone = new StringBuilder();

                foreach (var i in items)
                {
                    respone.Append(i.ToString());
                };
                return Ok(respone.ToString());
            }
            return Ok(items);
        }
    }
}
