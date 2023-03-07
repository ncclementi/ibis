window.BENCHMARK_DATA = {
  "lastUpdate": 1678206256671,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "f70de1d5b743a43a70385cd00b51c82dea8c1e87",
          "message": "fix(ci): fix invalid test id",
          "timestamp": "2023-03-07T11:19:21-05:00",
          "tree_id": "3df1c8a3cc61c4bbade117646b0d0184e2e3372b",
          "url": "https://github.com/ibis-project/ibis/commit/f70de1d5b743a43a70385cd00b51c82dea8c1e87"
        },
        "date": 1678206181006,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.486678447047563,
            "unit": "iter/sec",
            "range": "stddev: 0.00038970336227001366",
            "extra": "mean: 39.23618380000562 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7018405398709288,
            "unit": "iter/sec",
            "range": "stddev: 0.002928496963659497",
            "extra": "mean: 1.4248250751999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5456.557894186111,
            "unit": "iter/sec",
            "range": "stddev: 0.00004740801988347638",
            "extra": "mean: 183.26571794747866 usec\nrounds: 468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5653.0492309272395,
            "unit": "iter/sec",
            "range": "stddev: 0.00004696291559346527",
            "extra": "mean: 176.89568216195693 usec\nrounds: 925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 747377.8532906017,
            "unit": "iter/sec",
            "range": "stddev: 7.680621943782581e-7",
            "extra": "mean: 1.3380112825087573 usec\nrounds: 23753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.73949716013381,
            "unit": "iter/sec",
            "range": "stddev: 0.0005111309315378152",
            "extra": "mean: 9.639530047619042 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 304.68778612096344,
            "unit": "iter/sec",
            "range": "stddev: 0.00020059013628756639",
            "extra": "mean: 3.282048199999038 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.4001743119124,
            "unit": "iter/sec",
            "range": "stddev: 0.00004044217169535826",
            "extra": "mean: 7.225424425740249 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.46211892339394,
            "unit": "iter/sec",
            "range": "stddev: 0.000622428697452753",
            "extra": "mean: 9.305604709998931 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.12803644365785,
            "unit": "iter/sec",
            "range": "stddev: 0.00018973681603170505",
            "extra": "mean: 10.623827265307602 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.81511695284246,
            "unit": "iter/sec",
            "range": "stddev: 0.0001221268813785759",
            "extra": "mean: 6.104442731545163 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11972855.300538534,
            "unit": "iter/sec",
            "range": "stddev: 3.64928271786945e-9",
            "extra": "mean: 83.52226556634074 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 240.02223439497752,
            "unit": "iter/sec",
            "range": "stddev: 0.0037126308365869895",
            "extra": "mean: 4.1662806886232575 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.0530407981033,
            "unit": "iter/sec",
            "range": "stddev: 0.00021360135540069328",
            "extra": "mean: 3.2252546126492216 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.38646925775467,
            "unit": "iter/sec",
            "range": "stddev: 0.0006502836279447999",
            "extra": "mean: 9.67244560317542 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.3904696854045,
            "unit": "iter/sec",
            "range": "stddev: 0.00002075132600929954",
            "extra": "mean: 1.8643135113614242 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2723729.644668051,
            "unit": "iter/sec",
            "range": "stddev: 2.5148874530851425e-8",
            "extra": "mean: 367.1436340816501 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.654335871309239,
            "unit": "iter/sec",
            "range": "stddev: 0.00038315640153500615",
            "extra": "mean: 176.85542966665935 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.45663596111956,
            "unit": "iter/sec",
            "range": "stddev: 0.00021085963741046852",
            "extra": "mean: 3.1700078109095515 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.66444406876941,
            "unit": "iter/sec",
            "range": "stddev: 0.00006450132841585107",
            "extra": "mean: 10.239140861702548 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 662.9130743483446,
            "unit": "iter/sec",
            "range": "stddev: 0.000053590957318723026",
            "extra": "mean: 1.5084934038795628 msec\nrounds: 567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.2842809469985,
            "unit": "iter/sec",
            "range": "stddev: 0.000012205810347977633",
            "extra": "mean: 570.0330390352581 usec\nrounds: 1409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5171.236254187355,
            "unit": "iter/sec",
            "range": "stddev: 0.00004558052912578814",
            "extra": "mean: 193.37735714361537 usec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5277.850151300689,
            "unit": "iter/sec",
            "range": "stddev: 0.00005033012387052838",
            "extra": "mean: 189.47108601663447 usec\nrounds: 2174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7396151205992387,
            "unit": "iter/sec",
            "range": "stddev: 0.001402991112362533",
            "extra": "mean: 574.8397953999927 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.77647151483416,
            "unit": "iter/sec",
            "range": "stddev: 0.0001941381641947039",
            "extra": "mean: 3.238588727612811 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1971261.4550365743,
            "unit": "iter/sec",
            "range": "stddev: 6.985849729342117e-8",
            "extra": "mean: 507.28937931850663 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5220.607602167799,
            "unit": "iter/sec",
            "range": "stddev: 0.00015318924295354986",
            "extra": "mean: 191.54858518475152 usec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 106.81811208346677,
            "unit": "iter/sec",
            "range": "stddev: 0.011042362343005471",
            "extra": "mean: 9.361708239316274 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.35427256435334,
            "unit": "iter/sec",
            "range": "stddev: 0.0006425208180400647",
            "extra": "mean: 9.314952969389754 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6190245.079947064,
            "unit": "iter/sec",
            "range": "stddev: 7.89275023153667e-9",
            "extra": "mean: 161.5444925174259 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.18474663657373,
            "unit": "iter/sec",
            "range": "stddev: 0.0005899501041717",
            "extra": "mean: 8.320523427352196 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5550.188717844469,
            "unit": "iter/sec",
            "range": "stddev: 0.00005872138956355355",
            "extra": "mean: 180.1740536830558 usec\nrounds: 4005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1143.6079944783064,
            "unit": "iter/sec",
            "range": "stddev: 0.000010079397065409392",
            "extra": "mean: 874.4255066668908 usec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.81514496722374,
            "unit": "iter/sec",
            "range": "stddev: 0.00010250318554340035",
            "extra": "mean: 9.72619355172614 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.88981955188831,
            "unit": "iter/sec",
            "range": "stddev: 0.000534796830165",
            "extra": "mean: 10.538538325000957 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.27599010639412,
            "unit": "iter/sec",
            "range": "stddev: 0.0006689196066651775",
            "extra": "mean: 9.682792670104714 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.04729124004166,
            "unit": "iter/sec",
            "range": "stddev: 0.0007025991515313247",
            "extra": "mean: 9.519522000000153 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72648.84917412642,
            "unit": "iter/sec",
            "range": "stddev: 5.338574197151679e-7",
            "extra": "mean: 13.764842958533002 usec\nrounds: 14493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.90964362086669,
            "unit": "iter/sec",
            "range": "stddev: 0.0008421755787725595",
            "extra": "mean: 26.378512285712116 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.311768801650345,
            "unit": "iter/sec",
            "range": "stddev: 0.0007247509568932387",
            "extra": "mean: 23.088412864863102 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 103.92790773719176,
            "unit": "iter/sec",
            "range": "stddev: 0.013955449608999393",
            "extra": "mean: 9.622054573914403 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.63871802724302,
            "unit": "iter/sec",
            "range": "stddev: 0.00035013278422312303",
            "extra": "mean: 20.991328931818288 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5602316.3843739685,
            "unit": "iter/sec",
            "range": "stddev: 1.4226727452338291e-8",
            "extra": "mean: 178.4975948146281 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.729342496713631,
            "unit": "iter/sec",
            "range": "stddev: 0.0008397171211996555",
            "extra": "mean: 93.20235609090653 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.525783255363248,
            "unit": "iter/sec",
            "range": "stddev: 0.000410849408424849",
            "extra": "mean: 64.40898881250057 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 279.03238174917254,
            "unit": "iter/sec",
            "range": "stddev: 0.00028183468724779634",
            "extra": "mean: 3.5838134403300863 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13988.455946477605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015603815467708954",
            "extra": "mean: 71.48751826693261 usec\nrounds: 7062"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 731.4616709827849,
            "unit": "iter/sec",
            "range": "stddev: 0.000035004950750638956",
            "extra": "mean: 1.3671256330579966 msec\nrounds: 605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1968146.5776712091,
            "unit": "iter/sec",
            "range": "stddev: 9.31127376924059e-8",
            "extra": "mean: 508.09223832466813 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1763288.3162326906,
            "unit": "iter/sec",
            "range": "stddev: 7.650622327326675e-8",
            "extra": "mean: 567.1222288460034 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5142.500271509091,
            "unit": "iter/sec",
            "range": "stddev: 0.00008544932986426705",
            "extra": "mean: 194.45793820182828 usec\nrounds: 2314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.31572125021984,
            "unit": "iter/sec",
            "range": "stddev: 0.00007495390593645901",
            "extra": "mean: 6.160832680270308 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5219.517271507772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000489122426383905",
            "extra": "mean: 191.5885987117594 usec\nrounds: 2173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.24729374050528,
            "unit": "iter/sec",
            "range": "stddev: 0.003347319903767802",
            "extra": "mean: 5.839508339999355 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8510.715242446324,
            "unit": "iter/sec",
            "range": "stddev: 0.000013373362674718318",
            "extra": "mean: 117.49893769357975 usec\nrounds: 3547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4797438515459,
            "unit": "iter/sec",
            "range": "stddev: 0.0025751974043844343",
            "extra": "mean: 403.2674582000027 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.5522270015125,
            "unit": "iter/sec",
            "range": "stddev: 0.00008503794378040531",
            "extra": "mean: 15.255011854546556 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5209.9711962955,
            "unit": "iter/sec",
            "range": "stddev: 0.000022251792270656392",
            "extra": "mean: 191.93964080090123 usec\nrounds: 2397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.09581850555556,
            "unit": "iter/sec",
            "range": "stddev: 0.00007354643783827175",
            "extra": "mean: 9.001238871560167 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.18933020714314,
            "unit": "iter/sec",
            "range": "stddev: 0.00010997403854780296",
            "extra": "mean: 6.402485999996088 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 429518.35894875834,
            "unit": "iter/sec",
            "range": "stddev: 0.000009869617986896626",
            "extra": "mean: 2.3281891895086617 usec\nrounds: 1961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.55704074085446,
            "unit": "iter/sec",
            "range": "stddev: 0.0006304286224478059",
            "extra": "mean: 8.364208362831155 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 290.31234716443447,
            "unit": "iter/sec",
            "range": "stddev: 0.000024628847825404153",
            "extra": "mean: 3.4445658607609775 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 331.8223675034678,
            "unit": "iter/sec",
            "range": "stddev: 0.000013634216138897792",
            "extra": "mean: 3.0136606146345732 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8794620357041044,
            "unit": "iter/sec",
            "range": "stddev: 0.007400571692631932",
            "extra": "mean: 1.1370587466000075 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 295.3907394435841,
            "unit": "iter/sec",
            "range": "stddev: 0.00003797662947626417",
            "extra": "mean: 3.3853464800002215 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12717.439099890838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019620871463811652",
            "extra": "mean: 78.63218311055908 usec\nrounds: 5838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.58794432379422,
            "unit": "iter/sec",
            "range": "stddev: 0.00009779509362075687",
            "extra": "mean: 13.229622910716087 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.92045022863594,
            "unit": "iter/sec",
            "range": "stddev: 0.0001613077358743117",
            "extra": "mean: 8.4089826272723 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8776383047543828,
            "unit": "iter/sec",
            "range": "stddev: 0.005616251912245007",
            "extra": "mean: 1.1394215528000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.32097994818192,
            "unit": "iter/sec",
            "range": "stddev: 0.000467511496262966",
            "extra": "mean: 27.53229679999468 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12300.02475380673,
            "unit": "iter/sec",
            "range": "stddev: 0.000014968579981323072",
            "extra": "mean: 81.3006493901982 usec\nrounds: 4592"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 316.5090209503842,
            "unit": "iter/sec",
            "range": "stddev: 0.00018459777135436972",
            "extra": "mean: 3.159467610108843 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16527563400575543,
            "unit": "iter/sec",
            "range": "stddev: 0.14095875031549254",
            "extra": "mean: 6.050498647399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 163.15161375133783,
            "unit": "iter/sec",
            "range": "stddev: 0.013118640380085853",
            "extra": "mean: 6.129268212597132 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.65759623425504,
            "unit": "iter/sec",
            "range": "stddev: 0.00019522764376877775",
            "extra": "mean: 3.2086495310332745 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.573214848616985,
            "unit": "iter/sec",
            "range": "stddev: 0.000420111293891937",
            "extra": "mean: 17.072650060006254 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 300.26845797534514,
            "unit": "iter/sec",
            "range": "stddev: 0.00021902752827978263",
            "extra": "mean: 3.3303531338017174 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.2161972592555,
            "unit": "iter/sec",
            "range": "stddev: 0.0007356128977891122",
            "extra": "mean: 8.991496064812441 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148496.06617180156,
            "unit": "iter/sec",
            "range": "stddev: 4.938402014100278e-7",
            "extra": "mean: 6.734185125436632 usec\nrounds: 42193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.50838011580367,
            "unit": "iter/sec",
            "range": "stddev: 0.0006405883369557553",
            "extra": "mean: 9.301600479170466 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.59477548904144,
            "unit": "iter/sec",
            "range": "stddev: 0.0006446271405653864",
            "extra": "mean: 8.8032217652164 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.02704909526989,
            "unit": "iter/sec",
            "range": "stddev: 0.0006422921074502385",
            "extra": "mean: 8.401451666667757 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.149711923142526,
            "unit": "iter/sec",
            "range": "stddev: 0.00044318042448676306",
            "extra": "mean: 16.090179166665333 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.24622875703066,
            "unit": "iter/sec",
            "range": "stddev: 0.0006612513222067314",
            "extra": "mean: 8.386009439657359 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8285995672066714,
            "unit": "iter/sec",
            "range": "stddev: 0.004520430930122016",
            "extra": "mean: 1.2068555663999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7056218.79064149,
            "unit": "iter/sec",
            "range": "stddev: 4.3250054700271584e-9",
            "extra": "mean: 141.71896162376703 nsec\nrounds: 69445"
          }
        ]
      }
    ]
  }
}