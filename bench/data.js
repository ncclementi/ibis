window.BENCHMARK_DATA = {
  "lastUpdate": 1680690740693,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "01f5154e76c1f24a1e2bf5b71133eecc43ab7c59",
          "message": "fix(snowflake): make sure pyarrow is used when possible",
          "timestamp": "2023-04-05T06:24:47-04:00",
          "tree_id": "ef81cb19491dc5dce20dbc587aa922771f5fc7c4",
          "url": "https://github.com/ibis-project/ibis/commit/01f5154e76c1f24a1e2bf5b71133eecc43ab7c59"
        },
        "date": 1680690661192,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 211.69055759109622,
            "unit": "iter/sec",
            "range": "stddev: 0.0037639196688333855",
            "extra": "mean: 4.7238762625001485 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 105.47569553998561,
            "unit": "iter/sec",
            "range": "stddev: 0.007861838643379315",
            "extra": "mean: 9.480857129033126 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 157.40792346447208,
            "unit": "iter/sec",
            "range": "stddev: 0.0037882380118962984",
            "extra": "mean: 6.352920348547168 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.84487464179945,
            "unit": "iter/sec",
            "range": "stddev: 0.0009995642311757939",
            "extra": "mean: 11.514784310813988 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5728128473871114,
            "unit": "iter/sec",
            "range": "stddev: 0.0326239585943069",
            "extra": "mean: 1.7457708998000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.33971142017095,
            "unit": "iter/sec",
            "range": "stddev: 0.0027231341806086755",
            "extra": "mean: 69.73641035713943 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.61626346885007,
            "unit": "iter/sec",
            "range": "stddev: 0.019191926298482397",
            "extra": "mean: 27.310268860467232 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 267.9769266633828,
            "unit": "iter/sec",
            "range": "stddev: 0.0005876911636547388",
            "extra": "mean: 3.7316645595243445 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.54776555017853,
            "unit": "iter/sec",
            "range": "stddev: 0.0008284130525104087",
            "extra": "mean: 11.422336066668018 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5458851.373411194,
            "unit": "iter/sec",
            "range": "stddev: 1.6624664459100657e-7",
            "extra": "mean: 183.18872077576643 nsec\nrounds: 28572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.81406961644889,
            "unit": "iter/sec",
            "range": "stddev: 0.003346369456652135",
            "extra": "mean: 41.99198272727307 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 242.40582170732324,
            "unit": "iter/sec",
            "range": "stddev: 0.0005993279430707254",
            "extra": "mean: 4.125313463830021 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4750.042843770578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000713560910307915",
            "extra": "mean: 210.5244169137223 usec\nrounds: 3039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6863.5465293525585,
            "unit": "iter/sec",
            "range": "stddev: 0.000031160305793572396",
            "extra": "mean: 145.69727118821334 usec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 262.83504940316527,
            "unit": "iter/sec",
            "range": "stddev: 0.0006378655074035473",
            "extra": "mean: 3.804667612903065 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.56511150560053,
            "unit": "iter/sec",
            "range": "stddev: 0.0009686500143394345",
            "extra": "mean: 7.60079924347901 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4955.219822430677,
            "unit": "iter/sec",
            "range": "stddev: 0.000043368023334018286",
            "extra": "mean: 201.80739418932004 usec\nrounds: 2547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.22006089495265,
            "unit": "iter/sec",
            "range": "stddev: 0.0006186980196966436",
            "extra": "mean: 9.155827160376658 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 76.4787462581587,
            "unit": "iter/sec",
            "range": "stddev: 0.013607416777695594",
            "extra": "mean: 13.075528155553684 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10963.990060557244,
            "unit": "iter/sec",
            "range": "stddev: 0.00005639990221790518",
            "extra": "mean: 91.20767115591266 usec\nrounds: 6757"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 155.9489445956529,
            "unit": "iter/sec",
            "range": "stddev: 0.0006179123269029835",
            "extra": "mean: 6.412355034481426 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2459285.0995807345,
            "unit": "iter/sec",
            "range": "stddev: 7.112723629317352e-7",
            "extra": "mean: 406.62223349814525 nsec\nrounds: 99991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4422.933053792025,
            "unit": "iter/sec",
            "range": "stddev: 0.00007592118258425084",
            "extra": "mean: 226.09431068431948 usec\nrounds: 2031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.28185039994263,
            "unit": "iter/sec",
            "range": "stddev: 0.0012753238933976268",
            "extra": "mean: 19.887891794871994 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5866957912470364,
            "unit": "iter/sec",
            "range": "stddev: 0.056824859233108906",
            "extra": "mean: 1.7044608380000057 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2600769.0828292086,
            "unit": "iter/sec",
            "range": "stddev: 3.212573167242531e-7",
            "extra": "mean: 384.50164860923144 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.72434344093563,
            "unit": "iter/sec",
            "range": "stddev: 0.0010952376739563707",
            "extra": "mean: 14.987033943394284 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5763796277034925,
            "unit": "iter/sec",
            "range": "stddev: 0.03454377527133837",
            "extra": "mean: 1.7349676357999784 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1130.0363419692594,
            "unit": "iter/sec",
            "range": "stddev: 0.00013998532165231855",
            "extra": "mean: 884.9272920350053 usec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.459923981357827,
            "unit": "iter/sec",
            "range": "stddev: 0.002152938487040655",
            "extra": "mean: 105.70909469998355 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 93.14870994068637,
            "unit": "iter/sec",
            "range": "stddev: 0.0010781735312488936",
            "extra": "mean: 10.735521733331174 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 115.37428673778466,
            "unit": "iter/sec",
            "range": "stddev: 0.0008408137531507874",
            "extra": "mean: 8.66744253225796 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10625.801108877062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000318912981330851",
            "extra": "mean: 94.1105512660664 usec\nrounds: 3160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.62064716764584,
            "unit": "iter/sec",
            "range": "stddev: 0.019387377998363767",
            "extra": "mean: 27.30699966666605 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12088.212041606861,
            "unit": "iter/sec",
            "range": "stddev: 0.00002662419072970103",
            "extra": "mean: 82.72521995461886 usec\nrounds: 7547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 88.39395841320278,
            "unit": "iter/sec",
            "range": "stddev: 0.001553222682963234",
            "extra": "mean: 11.31299036666557 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 425.63379669875405,
            "unit": "iter/sec",
            "range": "stddev: 0.0004810551354733684",
            "extra": "mean: 2.3494374924079597 msec\nrounds: 461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.74266844032834,
            "unit": "iter/sec",
            "range": "stddev: 0.002071787927230656",
            "extra": "mean: 27.21631395999566 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 208.12373642434957,
            "unit": "iter/sec",
            "range": "stddev: 0.011980823884889564",
            "extra": "mean: 4.8048339760779175 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10780443088379467,
            "unit": "iter/sec",
            "range": "stddev: 0.1727422202161615",
            "extra": "mean: 9.276056575799998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5715317.675821298,
            "unit": "iter/sec",
            "range": "stddev: 3.91922226455302e-7",
            "extra": "mean: 174.96840188412818 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 641.3982309100986,
            "unit": "iter/sec",
            "range": "stddev: 0.00017647693815731234",
            "extra": "mean: 1.5590937919817316 msec\nrounds: 524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.47883536670594,
            "unit": "iter/sec",
            "range": "stddev: 0.0002866793171637911",
            "extra": "mean: 3.0629856875003396 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 146.178079105845,
            "unit": "iter/sec",
            "range": "stddev: 0.0004518770707110701",
            "extra": "mean: 6.840971000008267 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4478.52597965122,
            "unit": "iter/sec",
            "range": "stddev: 0.00006680429904022725",
            "extra": "mean: 223.28775238630598 usec\nrounds: 1991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1931868.3441541458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010049664550342713",
            "extra": "mean: 517.6336177493724 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.9034095898761,
            "unit": "iter/sec",
            "range": "stddev: 0.0013492117329471976",
            "extra": "mean: 10.53702922077813 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 115.86431348369518,
            "unit": "iter/sec",
            "range": "stddev: 0.0009759737732205469",
            "extra": "mean: 8.630785182537878 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 245.65619185993535,
            "unit": "iter/sec",
            "range": "stddev: 0.0004982746826654032",
            "extra": "mean: 4.070729878325906 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1918426.6514549283,
            "unit": "iter/sec",
            "range": "stddev: 7.359230596265938e-7",
            "extra": "mean: 521.2604814688556 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8715650408821223,
            "unit": "iter/sec",
            "range": "stddev: 0.011519951571533496",
            "extra": "mean: 534.3121815999893 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.11035005839476,
            "unit": "iter/sec",
            "range": "stddev: 0.0009601208639401813",
            "extra": "mean: 10.089763575759855 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 111.09639239771877,
            "unit": "iter/sec",
            "range": "stddev: 0.0012171045239470926",
            "extra": "mean: 9.001192373736645 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.170620073797799,
            "unit": "iter/sec",
            "range": "stddev: 0.0029302978393755787",
            "extra": "mean: 193.40040183333448 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4521.36972043219,
            "unit": "iter/sec",
            "range": "stddev: 0.00008475353643592311",
            "extra": "mean: 221.17191511257607 usec\nrounds: 2627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 69.06981428053976,
            "unit": "iter/sec",
            "range": "stddev: 0.0011281651996190713",
            "extra": "mean: 14.47810465999396 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 90.9996310154038,
            "unit": "iter/sec",
            "range": "stddev: 0.016886008649539586",
            "extra": "mean: 10.989055547167293 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6799153490269134,
            "unit": "iter/sec",
            "range": "stddev: 0.03470220761300676",
            "extra": "mean: 1.470771326800002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1498.6288500420633,
            "unit": "iter/sec",
            "range": "stddev: 0.0002118855002564843",
            "extra": "mean: 667.2766242101452 usec\nrounds: 950"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10832935.656712547,
            "unit": "iter/sec",
            "range": "stddev: 2.0361109852743656e-7",
            "extra": "mean: 92.31108091918364 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.99742375964682,
            "unit": "iter/sec",
            "range": "stddev: 0.0013987272509290583",
            "extra": "mean: 15.385225169814234 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 101.80551491834707,
            "unit": "iter/sec",
            "range": "stddev: 0.0012173902436753224",
            "extra": "mean: 9.822650578429354 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.285019061390695,
            "unit": "iter/sec",
            "range": "stddev: 0.0016205165489804377",
            "extra": "mean: 31.96418062068931 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3286753426831568,
            "unit": "iter/sec",
            "range": "stddev: 0.025046718737752504",
            "extra": "mean: 752.6293052000028 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.54859817606484,
            "unit": "iter/sec",
            "range": "stddev: 0.0009402003342452609",
            "extra": "mean: 4.039610837500144 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3799.8817284867964,
            "unit": "iter/sec",
            "range": "stddev: 0.00015800153209878502",
            "extra": "mean: 263.1660855397791 usec\nrounds: 3589"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 102.44709370792837,
            "unit": "iter/sec",
            "range": "stddev: 0.0012143797985131636",
            "extra": "mean: 9.761135858582293 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 223.7153580809659,
            "unit": "iter/sec",
            "range": "stddev: 0.0008448127980156911",
            "extra": "mean: 4.469965801981664 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4216.7936626754135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001301587996053769",
            "extra": "mean: 237.14700789166278 usec\nrounds: 3928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140141.45619744543,
            "unit": "iter/sec",
            "range": "stddev: 0.000007683664929814059",
            "extra": "mean: 7.135647274787121 usec\nrounds: 41151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3797.4571651213632,
            "unit": "iter/sec",
            "range": "stddev: 0.0001751407493280167",
            "extra": "mean: 263.334109252037 usec\nrounds: 1913"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 107.59263270165249,
            "unit": "iter/sec",
            "range": "stddev: 0.0012689464359095905",
            "extra": "mean: 9.294316672898377 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 104.87954413923241,
            "unit": "iter/sec",
            "range": "stddev: 0.0013241747082967609",
            "extra": "mean: 9.534747773812347 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4542.5865471191955,
            "unit": "iter/sec",
            "range": "stddev: 0.00007175330770006534",
            "extra": "mean: 220.138898758941 usec\nrounds: 2015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5873696.851685969,
            "unit": "iter/sec",
            "range": "stddev: 3.03665621173433e-7",
            "extra": "mean: 170.25052964948836 nsec\nrounds: 64099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 506848.7431478432,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015570810961137353",
            "extra": "mean: 1.9729751992465907 usec\nrounds: 2258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 226.43853265222438,
            "unit": "iter/sec",
            "range": "stddev: 0.0008079692928406575",
            "extra": "mean: 4.416209504129979 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.29200446302228,
            "unit": "iter/sec",
            "range": "stddev: 0.001773302200911645",
            "extra": "mean: 11.86352141428415 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.2658564340021,
            "unit": "iter/sec",
            "range": "stddev: 0.0016988881886786686",
            "extra": "mean: 12.458597521129564 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 205.2262134687218,
            "unit": "iter/sec",
            "range": "stddev: 0.01320013723266286",
            "extra": "mean: 4.8726718828850215 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.7746743000187,
            "unit": "iter/sec",
            "range": "stddev: 0.001318709456178403",
            "extra": "mean: 10.33328199999746 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.29367209731593,
            "unit": "iter/sec",
            "range": "stddev: 0.001279613784577323",
            "extra": "mean: 10.83497901075584 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 175.2501444365924,
            "unit": "iter/sec",
            "range": "stddev: 0.0004248521852757292",
            "extra": "mean: 5.706129391304508 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 757304.3835254519,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015612485430009334",
            "extra": "mean: 1.3204730115845045 usec\nrounds: 25974"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 291.35056009297256,
            "unit": "iter/sec",
            "range": "stddev: 0.0003398355135056374",
            "extra": "mean: 3.4322913252025025 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72201.3009905066,
            "unit": "iter/sec",
            "range": "stddev: 0.00002289261865338123",
            "extra": "mean: 13.850165942736755 usec\nrounds: 15198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 713.8227563448713,
            "unit": "iter/sec",
            "range": "stddev: 0.00018927744937792055",
            "extra": "mean: 1.400907986067156 msec\nrounds: 646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.05256312690062,
            "unit": "iter/sec",
            "range": "stddev: 0.0006194467397551886",
            "extra": "mean: 6.709042629133577 msec\nrounds: 151"
          }
        ]
      }
    ]
  }
}