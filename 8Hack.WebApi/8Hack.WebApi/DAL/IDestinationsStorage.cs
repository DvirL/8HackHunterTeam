using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using _8Hack.WebApi.Models.Common;

namespace _8Hack.WebApi.DAL
{
    public interface IDestinationsStorage
    {
        IEnumerable<Destination> Destinations { get; }
    }
}