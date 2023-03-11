window.BENCHMARK_DATA = {
  "lastUpdate": 1678494383171,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "2d04a890d37fe7f6ad727c16cb6d184292bb969b",
          "message": "chore(flake/poetry2nix): `4c424edc` -> `391224c4`",
          "timestamp": "2023-03-11T00:21:15Z",
          "tree_id": "6c0f841299fd4cf9ac810ead033efbc5ecdfd960",
          "url": "https://github.com/ibis-project/ibis/commit/2d04a890d37fe7f6ad727c16cb6d184292bb969b"
        },
        "date": 1678494296471,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5342.2677154918065,
            "unit": "iter/sec",
            "range": "stddev: 0.000025903087494311444",
            "extra": "mean: 187.1864259254818 usec\nrounds: 594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 226.8564138364767,
            "unit": "iter/sec",
            "range": "stddev: 0.006755111215718479",
            "extra": "mean: 4.408074619044374 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 703.1317544170587,
            "unit": "iter/sec",
            "range": "stddev: 0.00004762462746316565",
            "extra": "mean: 1.4222085600856758 msec\nrounds: 466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.0476746287571,
            "unit": "iter/sec",
            "range": "stddev: 0.000051311149559138786",
            "extra": "mean: 3.343948423078084 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5813.162848239958,
            "unit": "iter/sec",
            "range": "stddev: 0.000042468310521237996",
            "extra": "mean: 172.02339347895065 usec\nrounds: 2300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.546019144107357,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666530663068484",
            "extra": "mean: 94.82250945455141 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.785278416364911,
            "unit": "iter/sec",
            "range": "stddev: 0.0008661808897174318",
            "extra": "mean: 560.1367220000043 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12841898.341448924,
            "unit": "iter/sec",
            "range": "stddev: 3.4186492061438908e-9",
            "extra": "mean: 77.87010716113372 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.5883311591995275,
            "unit": "iter/sec",
            "range": "stddev: 0.0015792088391514943",
            "extra": "mean: 178.94429866665953 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.8159701384612,
            "unit": "iter/sec",
            "range": "stddev: 0.00022487340244360166",
            "extra": "mean: 3.3132772912620885 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.04289234980516,
            "unit": "iter/sec",
            "range": "stddev: 0.0002186027785499419",
            "extra": "mean: 14.076003480772451 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.801234407836958,
            "unit": "iter/sec",
            "range": "stddev: 0.0002053299724004864",
            "extra": "mean: 63.28619487500475 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71831.1589635603,
            "unit": "iter/sec",
            "range": "stddev: 5.903528812565709e-7",
            "extra": "mean: 13.921535089073206 usec\nrounds: 14620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.7426381170455,
            "unit": "iter/sec",
            "range": "stddev: 0.00004279109009212242",
            "extra": "mean: 1.842493899998961 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.3964969078344,
            "unit": "iter/sec",
            "range": "stddev: 0.00018781504161510506",
            "extra": "mean: 3.1605912510823337 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 736.8697036101013,
            "unit": "iter/sec",
            "range": "stddev: 0.00002572940383842406",
            "extra": "mean: 1.357092027397463 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.75253948222772,
            "unit": "iter/sec",
            "range": "stddev: 0.000061176912080567",
            "extra": "mean: 6.259681400002088 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5339.901094462186,
            "unit": "iter/sec",
            "range": "stddev: 0.00005689952055425465",
            "extra": "mean: 187.26938613845547 usec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.3230673564241,
            "unit": "iter/sec",
            "range": "stddev: 0.0006705195871047847",
            "extra": "mean: 22.063819999999623 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.4922159162555,
            "unit": "iter/sec",
            "range": "stddev: 0.0001835320524886323",
            "extra": "mean: 3.2206926574601002 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.17950394834632,
            "unit": "iter/sec",
            "range": "stddev: 0.0006143749818043653",
            "extra": "mean: 9.418013484848025 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5791.364176154713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000453812091910928",
            "extra": "mean: 172.67088885851572 usec\nrounds: 3662"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5819796.1321916515,
            "unit": "iter/sec",
            "range": "stddev: 9.778186759969074e-9",
            "extra": "mean: 171.82732475214823 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11497.304960828713,
            "unit": "iter/sec",
            "range": "stddev: 0.00004298114765456242",
            "extra": "mean: 86.97690488397039 usec\nrounds: 4279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.30763590857703,
            "unit": "iter/sec",
            "range": "stddev: 0.000614679473261052",
            "extra": "mean: 9.87092424999858 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8130.093388284448,
            "unit": "iter/sec",
            "range": "stddev: 0.00003399445408678145",
            "extra": "mean: 122.99981712891648 usec\nrounds: 4577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 92.72784896763339,
            "unit": "iter/sec",
            "range": "stddev: 0.009733801423295869",
            "extra": "mean: 10.784246708333 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.611435369878204,
            "unit": "iter/sec",
            "range": "stddev: 0.002049716871452361",
            "extra": "mean: 382.93116940000687 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.08246766369199,
            "unit": "iter/sec",
            "range": "stddev: 0.00008649456601003294",
            "extra": "mean: 10.300521031914307 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5050.86297940983,
            "unit": "iter/sec",
            "range": "stddev: 0.00011425457209074535",
            "extra": "mean: 197.9859687496107 usec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.92825569490529,
            "unit": "iter/sec",
            "range": "stddev: 0.00012259488340508055",
            "extra": "mean: 13.17032757894765 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.22371292379485,
            "unit": "iter/sec",
            "range": "stddev: 0.0006989694093824383",
            "extra": "mean: 8.387593168140786 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.88981686888576,
            "unit": "iter/sec",
            "range": "stddev: 0.0002114296620339364",
            "extra": "mean: 3.2165736725360117 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13374.896227859088,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023114229198032674",
            "extra": "mean: 74.76693523177109 usec\nrounds: 7164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 305.0809216333292,
            "unit": "iter/sec",
            "range": "stddev: 0.00024155068563099763",
            "extra": "mean: 3.2778188640779065 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1179.4770496744443,
            "unit": "iter/sec",
            "range": "stddev: 0.000051047024734866235",
            "extra": "mean: 847.8333684203665 usec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.1512967276586,
            "unit": "iter/sec",
            "range": "stddev: 0.00006189893418571295",
            "extra": "mean: 10.400275753247778 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.9412227516435,
            "unit": "iter/sec",
            "range": "stddev: 0.0006456231882110625",
            "extra": "mean: 8.337417086956432 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.40776035434192,
            "unit": "iter/sec",
            "range": "stddev: 0.0006724086445539145",
            "extra": "mean: 8.37466507229099 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.89402287884093,
            "unit": "iter/sec",
            "range": "stddev: 0.00002930144478846043",
            "extra": "mean: 3.0590953948724757 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.964133265307694,
            "unit": "iter/sec",
            "range": "stddev: 0.0003065840968476753",
            "extra": "mean: 20.848912133335613 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.42990549109643,
            "unit": "iter/sec",
            "range": "stddev: 0.00011311173939944057",
            "extra": "mean: 6.737186800000927 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.62816190186587,
            "unit": "iter/sec",
            "range": "stddev: 0.0006923760499040132",
            "extra": "mean: 8.429701547826742 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 264.79878651617713,
            "unit": "iter/sec",
            "range": "stddev: 0.007490044038549445",
            "extra": "mean: 3.776452351449533 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.2561495910664,
            "unit": "iter/sec",
            "range": "stddev: 0.00003067287224414756",
            "extra": "mean: 5.174479581198418 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6432861.711483638,
            "unit": "iter/sec",
            "range": "stddev: 1.0158993271059827e-8",
            "extra": "mean: 155.45181053944432 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.97382798969497,
            "unit": "iter/sec",
            "range": "stddev: 0.0007436699253785761",
            "extra": "mean: 10.872658253520154 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.02271741106397,
            "unit": "iter/sec",
            "range": "stddev: 0.0007019933045485031",
            "extra": "mean: 8.401757427082934 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1719718.7824744468,
            "unit": "iter/sec",
            "range": "stddev: 9.785279920902887e-8",
            "extra": "mean: 581.490421684604 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 750773.1575632355,
            "unit": "iter/sec",
            "range": "stddev: 2.759192712660401e-7",
            "extra": "mean: 1.3319602464820044 usec\nrounds: 23042"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.10412646777228,
            "unit": "iter/sec",
            "range": "stddev: 0.00007865623310450061",
            "extra": "mean: 8.467104663551916 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.70919919465176,
            "unit": "iter/sec",
            "range": "stddev: 0.0006418419737165409",
            "extra": "mean: 8.794363227272067 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.91114360786769,
            "unit": "iter/sec",
            "range": "stddev: 0.0005385057567084526",
            "extra": "mean: 27.846509454544695 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.90677247953855,
            "unit": "iter/sec",
            "range": "stddev: 0.017036780110003133",
            "extra": "mean: 11.506583105884427 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.4803608481791,
            "unit": "iter/sec",
            "range": "stddev: 0.00010738259845379085",
            "extra": "mean: 6.192703525973551 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.61182404191344,
            "unit": "iter/sec",
            "range": "stddev: 0.000374578213551213",
            "extra": "mean: 18.311052918366556 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1893757.7831508538,
            "unit": "iter/sec",
            "range": "stddev: 9.947012290186922e-8",
            "extra": "mean: 528.0506350374912 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.47559132759157,
            "unit": "iter/sec",
            "range": "stddev: 0.0008344757121900023",
            "extra": "mean: 26.684035249998722 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6797655157663114,
            "unit": "iter/sec",
            "range": "stddev: 0.0018954775161079697",
            "extra": "mean: 1.4710955128000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5754.1766906181165,
            "unit": "iter/sec",
            "range": "stddev: 0.00004648787010471625",
            "extra": "mean: 173.78680804683103 usec\nrounds: 2386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2435517.4719315814,
            "unit": "iter/sec",
            "range": "stddev: 1.8248959120976105e-8",
            "extra": "mean: 410.5903618121502 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8590008924679041,
            "unit": "iter/sec",
            "range": "stddev: 0.0021802645564777848",
            "extra": "mean: 1.164143144400009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 360.82242651404863,
            "unit": "iter/sec",
            "range": "stddev: 0.00008615256872480623",
            "extra": "mean: 2.771446358423802 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9168510216148213,
            "unit": "iter/sec",
            "range": "stddev: 0.0034360346971050782",
            "extra": "mean: 1.0906897374000095 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1897178.4766955066,
            "unit": "iter/sec",
            "range": "stddev: 1.0286538104815825e-7",
            "extra": "mean: 527.0985372666644 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.88737651860896,
            "unit": "iter/sec",
            "range": "stddev: 0.0007003803767039145",
            "extra": "mean: 9.44399637499997 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 297.3906605454321,
            "unit": "iter/sec",
            "range": "stddev: 0.00023579674366961366",
            "extra": "mean: 3.3625803788388664 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1746.6124279040303,
            "unit": "iter/sec",
            "range": "stddev: 0.000004493344500379309",
            "extra": "mean: 572.536862800192 usec\nrounds: 1414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 236.19883733089148,
            "unit": "iter/sec",
            "range": "stddev: 0.0036195937828592747",
            "extra": "mean: 4.233721094058976 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.24134478516926,
            "unit": "iter/sec",
            "range": "stddev: 0.019862353801947098",
            "extra": "mean: 12.013260989245403 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7181581.770716628,
            "unit": "iter/sec",
            "range": "stddev: 4.967463234392454e-9",
            "extra": "mean: 139.2450899991637 nsec\nrounds: 55556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11800.006440516956,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016266101865340891",
            "extra": "mean: 84.74571645709968 usec\nrounds: 4934"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.24059268861849,
            "unit": "iter/sec",
            "range": "stddev: 0.0001672867640468864",
            "extra": "mean: 9.23867816279197 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9231661661467092,
            "unit": "iter/sec",
            "range": "stddev: 0.004119748522603189",
            "extra": "mean: 1.083228606800003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.49814287454018,
            "unit": "iter/sec",
            "range": "stddev: 0.0003570773801603511",
            "extra": "mean: 7.326106999998762 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.0089782728274,
            "unit": "iter/sec",
            "range": "stddev: 0.0007145797221225153",
            "extra": "mean: 9.522995237624976 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 164.7115931458805,
            "unit": "iter/sec",
            "range": "stddev: 0.004125253487221318",
            "extra": "mean: 6.071218066079463 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17774413300952657,
            "unit": "iter/sec",
            "range": "stddev: 0.13781470513201843",
            "extra": "mean: 5.626064743000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.63690033542908,
            "unit": "iter/sec",
            "range": "stddev: 0.0005207446584125476",
            "extra": "mean: 37.54190567999103 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.18818929886056,
            "unit": "iter/sec",
            "range": "stddev: 0.00043142253991501113",
            "extra": "mean: 15.579190049184817 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.81726450195896,
            "unit": "iter/sec",
            "range": "stddev: 0.0006365652316801157",
            "extra": "mean: 8.346042652172637 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5293.00615395677,
            "unit": "iter/sec",
            "range": "stddev: 0.00004816721288088877",
            "extra": "mean: 188.92855419267804 usec\nrounds: 3423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 494553.9302178483,
            "unit": "iter/sec",
            "range": "stddev: 4.3034572395820325e-7",
            "extra": "mean: 2.0220241694561105 usec\nrounds: 1324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139017.39606703504,
            "unit": "iter/sec",
            "range": "stddev: 3.2276242094120613e-7",
            "extra": "mean: 7.193344346039929 usec\nrounds: 38168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.37590652685418,
            "unit": "iter/sec",
            "range": "stddev: 0.0007597508455774267",
            "extra": "mean: 8.978602564809535 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5609.324275427626,
            "unit": "iter/sec",
            "range": "stddev: 0.00004461596909052153",
            "extra": "mean: 178.27459260656937 usec\nrounds: 2570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.8714944969894,
            "unit": "iter/sec",
            "range": "stddev: 0.0001232636366376953",
            "extra": "mean: 9.101541801885666 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5491.138931753297,
            "unit": "iter/sec",
            "range": "stddev: 0.00004836913341505652",
            "extra": "mean: 182.11158239274496 usec\nrounds: 2215"
          }
        ]
      }
    ]
  }
}