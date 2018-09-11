using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using StoryDairy.Core.Model;
using StoryDairy.Core.Resources;

namespace StoryDairy
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Story, StoryResource>()
                .ReverseMap()
                .ForMember(s => s.Id, cfg => cfg.Ignore());
            CreateMap<Story, StoryResourceForUpdate>()
                            .ReverseMap()
                            .ForMember(s => s.Id, cfg => cfg.Ignore());

            CreateMap<User, UserResource>().ReverseMap();

            CreateMap<List<Story>, List<StoryResourceForUpdate>>().ReverseMap();
        }
    }
}
