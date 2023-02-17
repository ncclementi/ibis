window.BENCHMARK_DATA = {
  "lastUpdate": 1676642815955,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ae57c367da307880a2d067ffb1081fecd42a83bb",
          "message": "feat(common): support `Callable` arguments and return types in `Validator.from_annotable()`",
          "timestamp": "2023-02-17T09:01:50-05:00",
          "tree_id": "38e97d2607d3e5b9a624ea132a70674377c3c03c",
          "url": "https://github.com/ibis-project/ibis/commit/ae57c367da307880a2d067ffb1081fecd42a83bb"
        },
        "date": 1676642730877,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 242.34921170237516,
            "unit": "iter/sec",
            "range": "stddev: 0.003377353282552649",
            "extra": "mean: 4.126277089888299 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.90096027796838,
            "unit": "iter/sec",
            "range": "stddev: 0.0005852746142072409",
            "extra": "mean: 10.53730117241136 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.977702332623937,
            "unit": "iter/sec",
            "range": "stddev: 0.0002606573196903276",
            "extra": "mean: 200.89590200000202 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 147.531127274052,
            "unit": "iter/sec",
            "range": "stddev: 0.004857014619999815",
            "extra": "mean: 6.77823059090718 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6114.640244817982,
            "unit": "iter/sec",
            "range": "stddev: 0.00005115725712594286",
            "extra": "mean: 163.54191906015683 usec\nrounds: 383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10253.697685391706,
            "unit": "iter/sec",
            "range": "stddev: 0.000002993916671628205",
            "extra": "mean: 97.52579319991904 usec\nrounds: 4647"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5335.226999098113,
            "unit": "iter/sec",
            "range": "stddev: 0.00004671589001735732",
            "extra": "mean: 187.433449442553 usec\nrounds: 2423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8690053455087463,
            "unit": "iter/sec",
            "range": "stddev: 0.004188374865184601",
            "extra": "mean: 1.150740907600016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 251.79442770423987,
            "unit": "iter/sec",
            "range": "stddev: 0.00021390048902802518",
            "extra": "mean: 3.971493766234611 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 249.35403891702234,
            "unit": "iter/sec",
            "range": "stddev: 0.00023796391003844987",
            "extra": "mean: 4.010362151514099 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6139.565691800005,
            "unit": "iter/sec",
            "range": "stddev: 0.000046071521463222476",
            "extra": "mean: 162.87797055996953 usec\nrounds: 2072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 986.6656454672651,
            "unit": "iter/sec",
            "range": "stddev: 0.000014954855393717522",
            "extra": "mean: 1.013514562500471 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5499248.110272847,
            "unit": "iter/sec",
            "range": "stddev: 5.247550463273961e-9",
            "extra": "mean: 181.84304107540848 nsec\nrounds: 53195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 252.86162045473284,
            "unit": "iter/sec",
            "range": "stddev: 0.00021513990864881173",
            "extra": "mean: 3.9547322294370075 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 155.89011262530883,
            "unit": "iter/sec",
            "range": "stddev: 0.000635814848287764",
            "extra": "mean: 6.414775017858635 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 390132.81508887897,
            "unit": "iter/sec",
            "range": "stddev: 3.1663976541281644e-7",
            "extra": "mean: 2.563229652374109 usec\nrounds: 1929"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.7384893657069,
            "unit": "iter/sec",
            "range": "stddev: 0.000039612910189401834",
            "extra": "mean: 3.7630980833333814 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.895865123318757,
            "unit": "iter/sec",
            "range": "stddev: 0.0004249613156523518",
            "extra": "mean: 38.61620359999165 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.5392855240618,
            "unit": "iter/sec",
            "range": "stddev: 0.00010637125085685199",
            "extra": "mean: 10.466898454543577 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 146.87224214235826,
            "unit": "iter/sec",
            "range": "stddev: 0.005746301803842004",
            "extra": "mean: 6.808638483442869 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 253.40396599968838,
            "unit": "iter/sec",
            "range": "stddev: 0.00022988306830514857",
            "extra": "mean: 3.946268149572804 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.1107417201811,
            "unit": "iter/sec",
            "range": "stddev: 0.00010094650925918046",
            "extra": "mean: 8.256905917647158 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.44468371051269,
            "unit": "iter/sec",
            "range": "stddev: 0.00030955987204327043",
            "extra": "mean: 15.280079959181853 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58081.28456381718,
            "unit": "iter/sec",
            "range": "stddev: 5.860022672122227e-7",
            "extra": "mean: 17.21725005756792 usec\nrounds: 13005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.222496753830995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006377229395154332",
            "extra": "mean: 22.112887871793273 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.28322055399424,
            "unit": "iter/sec",
            "range": "stddev: 0.00007886275357770617",
            "extra": "mean: 11.327180790696206 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.39731948360595,
            "unit": "iter/sec",
            "range": "stddev: 0.0006163825628435401",
            "extra": "mean: 11.186017721519985 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.69644681532166,
            "unit": "iter/sec",
            "range": "stddev: 0.0007301695131047582",
            "extra": "mean: 28.821395035713238 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 627.5552599704265,
            "unit": "iter/sec",
            "range": "stddev: 0.00001785705033235835",
            "extra": "mean: 1.59348516981138 msec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.224846894543811,
            "unit": "iter/sec",
            "range": "stddev: 0.03147924588695528",
            "extra": "mean: 121.5828103333302 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 159.91475611187678,
            "unit": "iter/sec",
            "range": "stddev: 0.0006386189733468357",
            "extra": "mean: 6.253331614378334 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.77406309060024,
            "unit": "iter/sec",
            "range": "stddev: 0.0005447400691750314",
            "extra": "mean: 11.264551437500714 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 129.00445373187577,
            "unit": "iter/sec",
            "range": "stddev: 0.008035900664431625",
            "extra": "mean: 7.7516703576638575 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11312918.123355333,
            "unit": "iter/sec",
            "range": "stddev: 3.787558943107114e-9",
            "extra": "mean: 88.39452288942117 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5221.094710189112,
            "unit": "iter/sec",
            "range": "stddev: 0.00007127213731429366",
            "extra": "mean: 191.53071443972698 usec\nrounds: 1849"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120000.99728920784,
            "unit": "iter/sec",
            "range": "stddev: 3.6233730029047645e-7",
            "extra": "mean: 8.33326407771391 usec\nrounds: 35588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 217.39890954761887,
            "unit": "iter/sec",
            "range": "stddev: 0.0005488361307023501",
            "extra": "mean: 4.5998390796020105 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 571085.5687165876,
            "unit": "iter/sec",
            "range": "stddev: 2.3772331557154847e-7",
            "extra": "mean: 1.7510510767192395 usec\nrounds: 22574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8668080428619795,
            "unit": "iter/sec",
            "range": "stddev: 0.001955594370072171",
            "extra": "mean: 1.1536579618000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.92420429840537,
            "unit": "iter/sec",
            "range": "stddev: 0.0001039701524052979",
            "extra": "mean: 14.301199563636725 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 299.4305517429029,
            "unit": "iter/sec",
            "range": "stddev: 0.005593500424748451",
            "extra": "mean: 3.339672569079124 msec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 253.416795461032,
            "unit": "iter/sec",
            "range": "stddev: 0.00011919839206644695",
            "extra": "mean: 3.946068366071539 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 242.3609492758975,
            "unit": "iter/sec",
            "range": "stddev: 0.00021694359189185905",
            "extra": "mean: 4.1260772537312755 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.87367839834262,
            "unit": "iter/sec",
            "range": "stddev: 0.00025563718476679005",
            "extra": "mean: 23.324334121950617 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 275.1821776142931,
            "unit": "iter/sec",
            "range": "stddev: 0.00004366235784281597",
            "extra": "mean: 3.633956270967672 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.241650880397043,
            "unit": "iter/sec",
            "range": "stddev: 0.0009348773011025997",
            "extra": "mean: 446.09979579999504 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 413.8183006695832,
            "unit": "iter/sec",
            "range": "stddev: 0.00005076238806880065",
            "extra": "mean: 2.416519516855439 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1537172.6906546738,
            "unit": "iter/sec",
            "range": "stddev: 1.7542310603198786e-7",
            "extra": "mean: 650.544994768353 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.9732116346609,
            "unit": "iter/sec",
            "range": "stddev: 0.00004057379618561598",
            "extra": "mean: 5.781242023256836 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5176.451276508275,
            "unit": "iter/sec",
            "range": "stddev: 0.00004863558222976127",
            "extra": "mean: 193.1825388829971 usec\nrounds: 2006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 145.48516596300453,
            "unit": "iter/sec",
            "range": "stddev: 0.0007058323836825042",
            "extra": "mean: 6.873553007145006 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19038.51993650675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000282227889191812",
            "extra": "mean: 52.52509141125407 usec\nrounds: 7242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4414006.819598917,
            "unit": "iter/sec",
            "range": "stddev: 1.4010263527854266e-8",
            "extra": "mean: 226.5515303603792 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15351250525632357,
            "unit": "iter/sec",
            "range": "stddev: 0.08406569966947133",
            "extra": "mean: 6.514127291000011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.23901092376794,
            "unit": "iter/sec",
            "range": "stddev: 0.0006792909424736585",
            "extra": "mean: 12.159679314807878 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 139.94636636917147,
            "unit": "iter/sec",
            "range": "stddev: 0.009378870243104437",
            "extra": "mean: 7.145594601306406 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1463.1431798701733,
            "unit": "iter/sec",
            "range": "stddev: 0.000006190420702519217",
            "extra": "mean: 683.4601109159606 usec\nrounds: 1136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.692449911722012,
            "unit": "iter/sec",
            "range": "stddev: 0.0001829148645531942",
            "extra": "mean: 73.03294928571599 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.49824582705145,
            "unit": "iter/sec",
            "range": "stddev: 0.00019993064472747244",
            "extra": "mean: 9.661999505489483 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.23073224248603,
            "unit": "iter/sec",
            "range": "stddev: 0.0007020773831099281",
            "extra": "mean: 10.842372988765566 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2012751.926951501,
            "unit": "iter/sec",
            "range": "stddev: 2.1726280999824372e-8",
            "extra": "mean: 496.8322159377565 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.3949023703499,
            "unit": "iter/sec",
            "range": "stddev: 0.021780715800476653",
            "extra": "mean: 30.869054290321635 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.28370145497664,
            "unit": "iter/sec",
            "range": "stddev: 0.00010177997460959298",
            "extra": "mean: 14.644783142861074 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1576109.5789405445,
            "unit": "iter/sec",
            "range": "stddev: 1.022757135392107e-7",
            "extra": "mean: 634.4736516811201 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.50405094943176,
            "unit": "iter/sec",
            "range": "stddev: 0.0001903172466233304",
            "extra": "mean: 6.968444398495635 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.09652699295552,
            "unit": "iter/sec",
            "range": "stddev: 0.00018523529868097856",
            "extra": "mean: 6.9882897999979345 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10641.78416156532,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018185295457895291",
            "extra": "mean: 93.96920524019612 usec\nrounds: 5725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5978.799770679006,
            "unit": "iter/sec",
            "range": "stddev: 0.000051038600960552645",
            "extra": "mean: 167.25765008959834 usec\nrounds: 2232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.575903623208484,
            "unit": "iter/sec",
            "range": "stddev: 0.000749205209689691",
            "extra": "mean: 634.5565713999918 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4548.369816189384,
            "unit": "iter/sec",
            "range": "stddev: 0.000019042146050868273",
            "extra": "mean: 219.8589913336902 usec\nrounds: 2077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.47580938549885,
            "unit": "iter/sec",
            "range": "stddev: 0.0006744848612910939",
            "extra": "mean: 11.302524463414512 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5877.913837256145,
            "unit": "iter/sec",
            "range": "stddev: 0.000057255513278093774",
            "extra": "mean: 170.12838699024005 usec\nrounds: 3336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4733807.592104267,
            "unit": "iter/sec",
            "range": "stddev: 1.3454286049049135e-8",
            "extra": "mean: 211.2464396883849 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9680.895057725624,
            "unit": "iter/sec",
            "range": "stddev: 0.000037816076325018176",
            "extra": "mean: 103.29623387477712 usec\nrounds: 3814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.16102981828374,
            "unit": "iter/sec",
            "range": "stddev: 0.00006251511739030403",
            "extra": "mean: 6.985141146786341 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7468365038199685,
            "unit": "iter/sec",
            "range": "stddev: 0.0031715992051796",
            "extra": "mean: 1.3389811489999943 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 518.5528809174853,
            "unit": "iter/sec",
            "range": "stddev: 0.000027839987679735743",
            "extra": "mean: 1.9284436299547338 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.08338771419071,
            "unit": "iter/sec",
            "range": "stddev: 0.00022159181384888413",
            "extra": "mean: 18.48996599999623 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 82.38276355379799,
            "unit": "iter/sec",
            "range": "stddev: 0.014460844787139845",
            "extra": "mean: 12.13846145555648 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.92927480114354,
            "unit": "iter/sec",
            "range": "stddev: 0.00012340283884200605",
            "extra": "mean: 10.211451090908342 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5868610668270002,
            "unit": "iter/sec",
            "range": "stddev: 0.0011273936695114794",
            "extra": "mean: 1.703980816800015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2012238.593238816,
            "unit": "iter/sec",
            "range": "stddev: 2.7250713306535958e-8",
            "extra": "mean: 496.9589607117357 nsec\nrounds: 99010"
          }
        ]
      }
    ]
  }
}