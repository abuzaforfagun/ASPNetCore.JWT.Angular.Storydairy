using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StoryDairy.Core.Resources
{
    public class LoginResource
    {
        [Required]
        public string UserId { get; set; }
        [Required]
        public string Password { get; set; }

    }
}
