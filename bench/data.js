window.BENCHMARK_DATA = {
  "lastUpdate": 1677173000908,
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
          "id": "b62356e7bcb4d4202b8ebf48643c1d54222ad771",
          "message": "feat: add examples API",
          "timestamp": "2023-02-23T12:16:30-05:00",
          "tree_id": "ea09e5bd44a88a778ca103a24484ed0f999a6346",
          "url": "https://github.com/ibis-project/ibis/commit/b62356e7bcb4d4202b8ebf48643c1d54222ad771"
        },
        "date": 1677172916297,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 111.26661904963512,
            "unit": "iter/sec",
            "range": "stddev: 0.00032337565026059443",
            "extra": "mean: 8.98742146154282 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 93.26032449440774,
            "unit": "iter/sec",
            "range": "stddev: 0.010603869496186314",
            "extra": "mean: 10.722673392155782 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 239.30346433534902,
            "unit": "iter/sec",
            "range": "stddev: 0.0002846158339017071",
            "extra": "mean: 4.178794497511517 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 238.53766244044405,
            "unit": "iter/sec",
            "range": "stddev: 0.00026840249198162124",
            "extra": "mean: 4.192210109586662 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8436854441479896,
            "unit": "iter/sec",
            "range": "stddev: 0.0030650549072935556",
            "extra": "mean: 1.1852758713999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.76514239012266,
            "unit": "iter/sec",
            "range": "stddev: 0.0007425020080578437",
            "extra": "mean: 12.082381194807702 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.01747203911057,
            "unit": "iter/sec",
            "range": "stddev: 0.0003447762037705372",
            "extra": "mean: 15.380481102040704 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6318.888522701955,
            "unit": "iter/sec",
            "range": "stddev: 0.000020429008176157505",
            "extra": "mean: 158.25567999930473 usec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 353387.0991698461,
            "unit": "iter/sec",
            "range": "stddev: 8.460264700585739e-7",
            "extra": "mean: 2.829758082140335 usec\nrounds: 1856"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4321623.630933022,
            "unit": "iter/sec",
            "range": "stddev: 2.949955845966881e-8",
            "extra": "mean: 231.39451405307034 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1590569.135538944,
            "unit": "iter/sec",
            "range": "stddev: 1.3153489325387851e-7",
            "extra": "mean: 628.7057743398011 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 101.20520010131409,
            "unit": "iter/sec",
            "range": "stddev: 0.0006164093351967113",
            "extra": "mean: 9.880915199998855 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.32614088050453,
            "unit": "iter/sec",
            "range": "stddev: 0.00043936402143669923",
            "extra": "mean: 25.428378620688363 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4433.101715039454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000647775145557805",
            "extra": "mean: 225.57569491524745 usec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 2692512.269110904,
            "unit": "iter/sec",
            "range": "stddev: 9.024271381670381e-8",
            "extra": "mean: 371.4003503242013 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.42735832794042,
            "unit": "iter/sec",
            "range": "stddev: 0.00016145300284096497",
            "extra": "mean: 8.663457385543746 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 622.6820301225829,
            "unit": "iter/sec",
            "range": "stddev: 0.000026216203210773063",
            "extra": "mean: 1.605956092555196 msec\nrounds: 497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4466.739125803299,
            "unit": "iter/sec",
            "range": "stddev: 0.000021203434438285185",
            "extra": "mean: 223.8769652391911 usec\nrounds: 1985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 130.66350997993374,
            "unit": "iter/sec",
            "range": "stddev: 0.00011314890125118992",
            "extra": "mean: 7.653246114034224 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7330936222167713,
            "unit": "iter/sec",
            "range": "stddev: 0.0038763934293524513",
            "extra": "mean: 1.3640822531999959 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.410771305788565,
            "unit": "iter/sec",
            "range": "stddev: 0.0005788185289309973",
            "extra": "mean: 22.021207111109536 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 96.47102022790314,
            "unit": "iter/sec",
            "range": "stddev: 0.01373364069538695",
            "extra": "mean: 10.365807240740276 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 269.069410934239,
            "unit": "iter/sec",
            "range": "stddev: 0.00005925895808945813",
            "extra": "mean: 3.716513135134494 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 76.77897863758506,
            "unit": "iter/sec",
            "range": "stddev: 0.0007786480393348743",
            "extra": "mean: 13.024398315067936 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 155.8724028889155,
            "unit": "iter/sec",
            "range": "stddev: 0.00013114363218072746",
            "extra": "mean: 6.41550384459437 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.02032480008863,
            "unit": "iter/sec",
            "range": "stddev: 0.002009861063228845",
            "extra": "mean: 47.57300420000092 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 124.6229042497429,
            "unit": "iter/sec",
            "range": "stddev: 0.00039248572933007136",
            "extra": "mean: 8.02420715533969 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4505.561877208753,
            "unit": "iter/sec",
            "range": "stddev: 0.00006107699537544556",
            "extra": "mean: 221.94790067326997 usec\nrounds: 1782"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119133.70679475268,
            "unit": "iter/sec",
            "range": "stddev: 3.9714600492374516e-7",
            "extra": "mean: 8.393930037976839 usec\nrounds: 30488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.76559556947635,
            "unit": "iter/sec",
            "range": "stddev: 0.0001632692530084938",
            "extra": "mean: 14.756750702128118 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12278628.349287475,
            "unit": "iter/sec",
            "range": "stddev: 3.870468746595252e-9",
            "extra": "mean: 81.4423216951778 nsec\nrounds: 120468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14968953152032738,
            "unit": "iter/sec",
            "range": "stddev: 0.09747281900877709",
            "extra": "mean: 6.680493885200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.43620632068286,
            "unit": "iter/sec",
            "range": "stddev: 0.000425389667547574",
            "extra": "mean: 12.432212379748526 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 245.75516023120986,
            "unit": "iter/sec",
            "range": "stddev: 0.0002751430907851932",
            "extra": "mean: 4.069090549550155 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1444033.1090010405,
            "unit": "iter/sec",
            "range": "stddev: 2.045488965177241e-7",
            "extra": "mean: 692.5048974062543 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.0337936203632,
            "unit": "iter/sec",
            "range": "stddev: 0.000043503963507936705",
            "extra": "mean: 5.881183844152262 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 82.36838346360621,
            "unit": "iter/sec",
            "range": "stddev: 0.0007701540960208598",
            "extra": "mean: 12.140580620255122 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5374080.9838653,
            "unit": "iter/sec",
            "range": "stddev: 6.519327948092256e-9",
            "extra": "mean: 186.0783272530119 nsec\nrounds: 52357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 109.71339853340668,
            "unit": "iter/sec",
            "range": "stddev: 0.0007793107428201202",
            "extra": "mean: 9.114657037039187 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.499447944748795,
            "unit": "iter/sec",
            "range": "stddev: 0.00023351579753278992",
            "extra": "mean: 74.07710330769444 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 245.82535913156806,
            "unit": "iter/sec",
            "range": "stddev: 0.00026677905207717496",
            "extra": "mean: 4.0679285633212094 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3891.210251989269,
            "unit": "iter/sec",
            "range": "stddev: 0.000059782758122551944",
            "extra": "mean: 256.98945449909286 usec\nrounds: 1956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9102.18101349398,
            "unit": "iter/sec",
            "range": "stddev: 0.000017133004247793378",
            "extra": "mean: 109.86377863915256 usec\nrounds: 4513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 227.52717548907756,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900403743325857",
            "extra": "mean: 4.395079391507697 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5716895123442088,
            "unit": "iter/sec",
            "range": "stddev: 0.07534175484750191",
            "extra": "mean: 1.7492012332000058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 72.43793732649196,
            "unit": "iter/sec",
            "range": "stddev: 0.0007383379717402724",
            "extra": "mean: 13.804920969695813 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.889071088705865,
            "unit": "iter/sec",
            "range": "stddev: 0.00035201677941278976",
            "extra": "mean: 204.53783180000755 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10265.376821350152,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021239788505403893",
            "extra": "mean: 97.41483604578241 usec\nrounds: 4178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 80.72994963632853,
            "unit": "iter/sec",
            "range": "stddev: 0.0008373346737039691",
            "extra": "mean: 12.386976636363457 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3978.308865717069,
            "unit": "iter/sec",
            "range": "stddev: 0.00006757644620516558",
            "extra": "mean: 251.36308762184441 usec\nrounds: 2157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.05647856673069,
            "unit": "iter/sec",
            "range": "stddev: 0.00011603751268822297",
            "extra": "mean: 11.620275621951821 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.166013433332074,
            "unit": "iter/sec",
            "range": "stddev: 0.0024980576303026717",
            "extra": "mean: 461.677653799984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 435.27565326497484,
            "unit": "iter/sec",
            "range": "stddev: 0.00005192500749407188",
            "extra": "mean: 2.29739474858992 msec\nrounds: 354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.104303870509206,
            "unit": "iter/sec",
            "range": "stddev: 0.03210406010448094",
            "extra": "mean: 34.359179468754775 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.32288599950881,
            "unit": "iter/sec",
            "range": "stddev: 0.0009015553465804594",
            "extra": "mean: 30.937831479998295 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.10123658582275,
            "unit": "iter/sec",
            "range": "stddev: 0.0005609150463137133",
            "extra": "mean: 109.87517911112515 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8377240969217791,
            "unit": "iter/sec",
            "range": "stddev: 0.003580869392935741",
            "extra": "mean: 1.1937104395999882 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 103.52757592983437,
            "unit": "iter/sec",
            "range": "stddev: 0.0007661148344089153",
            "extra": "mean: 9.659262191918298 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3974.44961223404,
            "unit": "iter/sec",
            "range": "stddev: 0.00006653560105312296",
            "extra": "mean: 251.60716515862418 usec\nrounds: 1768"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 107.08372524246799,
            "unit": "iter/sec",
            "range": "stddev: 0.00010861678228693627",
            "extra": "mean: 9.338487223298552 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5425656106850865,
            "unit": "iter/sec",
            "range": "stddev: 0.0015960575303071477",
            "extra": "mean: 648.2706428000029 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10831.352118709687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018963983585417334",
            "extra": "mean: 92.32457675091516 usec\nrounds: 4912"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.65904631467619,
            "unit": "iter/sec",
            "range": "stddev: 0.0010694988273184853",
            "extra": "mean: 29.709695000002867 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 54897.920628631015,
            "unit": "iter/sec",
            "range": "stddev: 6.328730925467693e-7",
            "extra": "mean: 18.215626175802154 usec\nrounds: 12225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.34841665793451,
            "unit": "iter/sec",
            "range": "stddev: 0.0006590784069778807",
            "extra": "mean: 13.633559462688474 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4363.914256422675,
            "unit": "iter/sec",
            "range": "stddev: 0.00004857624536013151",
            "extra": "mean: 229.1520734002119 usec\nrounds: 1812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1444.4221949583443,
            "unit": "iter/sec",
            "range": "stddev: 0.000011218991537886683",
            "extra": "mean: 692.3183564268332 usec\nrounds: 1097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.55193244310425,
            "unit": "iter/sec",
            "range": "stddev: 0.000012781733820903128",
            "extra": "mean: 3.7516141445099107 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.76073621389508,
            "unit": "iter/sec",
            "range": "stddev: 0.001126671222298661",
            "extra": "mean: 21.385463124997745 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1414457.3603614417,
            "unit": "iter/sec",
            "range": "stddev: 1.5201920307995269e-7",
            "extra": "mean: 706.9849032030673 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4453.9736151175475,
            "unit": "iter/sec",
            "range": "stddev: 0.00007297463867580123",
            "extra": "mean: 224.51861784852724 usec\nrounds: 1748"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 78.41503130065959,
            "unit": "iter/sec",
            "range": "stddev: 0.0007958366770599437",
            "extra": "mean: 12.752657027780698 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 95.5121256077989,
            "unit": "iter/sec",
            "range": "stddev: 0.00017855113573983164",
            "extra": "mean: 10.469874831456442 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 241.77959280313084,
            "unit": "iter/sec",
            "range": "stddev: 0.00024065708027138405",
            "extra": "mean: 4.135998362832262 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 552.7107262543501,
            "unit": "iter/sec",
            "range": "stddev: 0.00005767458137362926",
            "extra": "mean: 1.8092646885593702 msec\nrounds: 472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 107.48310658047062,
            "unit": "iter/sec",
            "range": "stddev: 0.0007990220299373406",
            "extra": "mean: 9.303787653842313 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 288.9208322025684,
            "unit": "iter/sec",
            "range": "stddev: 0.00018447734248050544",
            "extra": "mean: 3.4611557511328193 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 215.2591540457229,
            "unit": "iter/sec",
            "range": "stddev: 0.0005080126776286491",
            "extra": "mean: 4.645563179104529 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 973.1036143232471,
            "unit": "iter/sec",
            "range": "stddev: 0.00009873137868033436",
            "extra": "mean: 1.0276397962980108 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 581249.9242883396,
            "unit": "iter/sec",
            "range": "stddev: 2.493670341990365e-7",
            "extra": "mean: 1.720430331624322 usec\nrounds: 20619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1427686.5928061476,
            "unit": "iter/sec",
            "range": "stddev: 1.1895494326852047e-7",
            "extra": "mean: 700.4338382379001 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.09158764948508,
            "unit": "iter/sec",
            "range": "stddev: 0.0008758022656724965",
            "extra": "mean: 12.64356968571373 msec\nrounds: 70"
          }
        ]
      }
    ]
  }
}