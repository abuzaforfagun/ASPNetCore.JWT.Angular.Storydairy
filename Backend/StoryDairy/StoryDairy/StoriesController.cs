using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch.Adapters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using StoryDairy.Core;
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
        [Authorize]
        public IActionResult Post([FromBody] StoryResourceForUpdate story)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var _story = mapper.Map<Story>(story);
            _story.UserId = User.Identity.Name;
            unitOfWork.StoryRepository.Add(_story);
            unitOfWork.Done();
            return Ok();
        }

        [HttpGet]
        public IActionResult Get()
        {
            var items = unitOfWork.StoryRepository.Get().ToList();
            if (items.Count() == 0)
            {
                return NoContent();
            }

            var _items = mapper.Map<IEnumerable<StoryResource>>(items);
            //IEnumerable<StoryResourceForUpdate> ienumerableDest = Mapper.Map<List<Story>, IEnumerable<StoryResourceForUpdate>>(items);

            return ReturnFormattedData<StoryResource>(_items);
        }

        [HttpPut("{id}")]
        [Authorize]
        public IActionResult Put(int id, [FromBody] StoryResourceForUpdate story)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var itemFromDb = unitOfWork.StoryRepository.Get(id);
            if (CheckModel(itemFromDb, out var actionResult)) return actionResult;
            
            mapper.Map<StoryResourceForUpdate, Story>(story, itemFromDb);
            unitOfWork.Done();
            return Ok(itemFromDb);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var item = unitOfWork.StoryRepository.Get(id);
            if (CheckModel(item, out var actionResult)) return actionResult;
            unitOfWork.StoryRepository.Delete(item);
            unitOfWork.Done();
            return Ok();
        }

        private bool CheckModel(Story item, out IActionResult actionResult)
        {
            if (item.IsNull())
            {
                {
                    actionResult = NotFound();
                    return true;
                }
            }

            if (!isAuthorized(item.UserId))
            {
                {
                    actionResult = Unauthorized();
                    return true;
                }
            }

            actionResult = null;
            return false;
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


        private bool isAuthorized(string userId)
        {
            if (userId != User.Identity.Name)
            {
                return false;
            }

            return true;
        }

    }
}
