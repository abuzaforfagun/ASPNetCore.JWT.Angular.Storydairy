using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using StoryDairy.Core.Model;

namespace StoryDairy.Core.Presistance
{
    public class StoryDbContext : DbContext
    {
        public DbSet<Story> Stories { get; set; }
        public DbSet<User> Users { get; set; }
        public StoryDbContext(DbContextOptions<StoryDbContext> options)
           : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasIndex(u => u.UserId)
                .IsUnique();
        }
    }
}
