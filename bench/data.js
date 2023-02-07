window.BENCHMARK_DATA = {
  "lastUpdate": 1675792241859,
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
          "id": "d4f0275faee2b1aeee432734f599d88643113e0c",
          "message": "fix(backends): fix capitalize implementations across all backends",
          "timestamp": "2023-02-07T12:45:45-05:00",
          "tree_id": "abba4a443ed30317d18bcfbeef93382761cf0e87",
          "url": "https://github.com/ibis-project/ibis/commit/d4f0275faee2b1aeee432734f599d88643113e0c"
        },
        "date": 1675792167980,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 141.81974544534316,
            "unit": "iter/sec",
            "range": "stddev: 0.0070709883965211625",
            "extra": "mean: 7.051204307692094 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5417.5989855350645,
            "unit": "iter/sec",
            "range": "stddev: 0.000056010144306044105",
            "extra": "mean: 184.5836140087131 usec\nrounds: 671"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 243.9560275359444,
            "unit": "iter/sec",
            "range": "stddev: 0.00019055324418666496",
            "extra": "mean: 4.099099374999702 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 946.0159766919568,
            "unit": "iter/sec",
            "range": "stddev: 0.000033031067195723835",
            "extra": "mean: 1.0570646000047645 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 247.6200425041658,
            "unit": "iter/sec",
            "range": "stddev: 0.00022389492544169925",
            "extra": "mean: 4.038445312774618 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.377299522672555,
            "unit": "iter/sec",
            "range": "stddev: 0.0001497465395683426",
            "extra": "mean: 74.75350299999988 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.96218458182136,
            "unit": "iter/sec",
            "range": "stddev: 0.00021912998155703968",
            "extra": "mean: 15.634237738093287 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 154.49581429128446,
            "unit": "iter/sec",
            "range": "stddev: 0.014418085539964536",
            "extra": "mean: 6.4726672666653124 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.9377130349013,
            "unit": "iter/sec",
            "range": "stddev: 0.0006681715041132179",
            "extra": "mean: 10.75989463636216 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58782.072558352105,
            "unit": "iter/sec",
            "range": "stddev: 7.530011715421835e-7",
            "extra": "mean: 17.01198948042049 usec\nrounds: 4753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1669400.9867532223,
            "unit": "iter/sec",
            "range": "stddev: 9.359860977028644e-8",
            "extra": "mean: 599.0172570491143 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.84246892874589,
            "unit": "iter/sec",
            "range": "stddev: 0.0008355466783295888",
            "extra": "mean: 11.25587809589159 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4844.397074363236,
            "unit": "iter/sec",
            "range": "stddev: 0.000052593573613162024",
            "extra": "mean: 206.42403680987348 usec\nrounds: 1956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 230.21900960666449,
            "unit": "iter/sec",
            "range": "stddev: 0.0003410170887072618",
            "extra": "mean: 4.343689957265161 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.90591006043948,
            "unit": "iter/sec",
            "range": "stddev: 0.0009872954267804844",
            "extra": "mean: 11.918111600001424 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 154.6337763242741,
            "unit": "iter/sec",
            "range": "stddev: 0.0007144734438655665",
            "extra": "mean: 6.4668924459489 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.71006531608906,
            "unit": "iter/sec",
            "range": "stddev: 0.00020171357268090472",
            "extra": "mean: 11.804972599992425 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 127.1043039017137,
            "unit": "iter/sec",
            "range": "stddev: 0.010450180654982376",
            "extra": "mean: 7.867554199999969 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4367823.630537072,
            "unit": "iter/sec",
            "range": "stddev: 1.3914233876850972e-8",
            "extra": "mean: 228.94697327260613 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10882.103536043785,
            "unit": "iter/sec",
            "range": "stddev: 0.000002375371079248302",
            "extra": "mean: 91.89399794697711 usec\nrounds: 4384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 265.99678750968155,
            "unit": "iter/sec",
            "range": "stddev: 0.00026176106953652314",
            "extra": "mean: 3.759443899162138 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.343401793914904,
            "unit": "iter/sec",
            "range": "stddev: 0.027780863482145438",
            "extra": "mean: 31.904641575763574 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.28514002987052,
            "unit": "iter/sec",
            "range": "stddev: 0.00014454230426970353",
            "extra": "mean: 11.326934517651086 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 503.89756165701044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000883703481995465",
            "extra": "mean: 1.984530341269389 msec\nrounds: 378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 244.0473933457218,
            "unit": "iter/sec",
            "range": "stddev: 0.00021136167230832742",
            "extra": "mean: 4.097564765149459 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5536.420457285794,
            "unit": "iter/sec",
            "range": "stddev: 0.00005306148032369316",
            "extra": "mean: 180.6221199627323 usec\nrounds: 3201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 215.65834731763613,
            "unit": "iter/sec",
            "range": "stddev: 0.0003056169099785292",
            "extra": "mean: 4.636964033333395 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1424.838352084971,
            "unit": "iter/sec",
            "range": "stddev: 0.00003178049326363714",
            "extra": "mean: 701.8340000019626 usec\nrounds: 1087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 404.03375804614376,
            "unit": "iter/sec",
            "range": "stddev: 0.000055083867525403925",
            "extra": "mean: 2.475040711538248 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.031964287417757,
            "unit": "iter/sec",
            "range": "stddev: 0.0022742877044572753",
            "extra": "mean: 45.38859935294514 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5311.566194773084,
            "unit": "iter/sec",
            "range": "stddev: 0.000052832177797774",
            "extra": "mean: 188.2683870124904 usec\nrounds: 1540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.02432890407502,
            "unit": "iter/sec",
            "range": "stddev: 0.0004186446459308887",
            "extra": "mean: 8.472829367348117 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8558678173025555,
            "unit": "iter/sec",
            "range": "stddev: 0.026130715785743188",
            "extra": "mean: 1.1684047229999919 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 124343.33051152596,
            "unit": "iter/sec",
            "range": "stddev: 4.0017076266441415e-7",
            "extra": "mean: 8.042248795220306 usec\nrounds: 36102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 263.6493195945602,
            "unit": "iter/sec",
            "range": "stddev: 0.000016622913856208986",
            "extra": "mean: 3.7929170518543325 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.580871898085004,
            "unit": "iter/sec",
            "range": "stddev: 0.002899287598413822",
            "extra": "mean: 1.7215499722000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10873649.709775109,
            "unit": "iter/sec",
            "range": "stddev: 4.4883686979877494e-9",
            "extra": "mean: 91.96544184259606 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.8869270912391,
            "unit": "iter/sec",
            "range": "stddev: 0.03207685555546906",
            "extra": "mean: 35.85909615384472 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.21069347850818,
            "unit": "iter/sec",
            "range": "stddev: 0.0007766105665232086",
            "extra": "mean: 11.209418523810836 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.80397109474383,
            "unit": "iter/sec",
            "range": "stddev: 0.00032310626527731566",
            "extra": "mean: 11.13536503797803 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.36388427077345,
            "unit": "iter/sec",
            "range": "stddev: 0.0007880542704809391",
            "extra": "mean: 11.714555968751483 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 271.2403986173198,
            "unit": "iter/sec",
            "range": "stddev: 0.00003688347067235446",
            "extra": "mean: 3.6867664444441868 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2609724594395066,
            "unit": "iter/sec",
            "range": "stddev: 0.004583135772622053",
            "extra": "mean: 442.2875633999979 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.5949817450982,
            "unit": "iter/sec",
            "range": "stddev: 0.0007987164773991773",
            "extra": "mean: 11.161339402300962 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10768.548975356416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036114034184479857",
            "extra": "mean: 92.86302196224186 usec\nrounds: 4963"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 236.69154652695374,
            "unit": "iter/sec",
            "range": "stddev: 0.00029243189347201616",
            "extra": "mean: 4.22490796428221 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 64.43178917574255,
            "unit": "iter/sec",
            "range": "stddev: 0.022301953564871815",
            "extra": "mean: 15.520289173911108 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4047.954864402067,
            "unit": "iter/sec",
            "range": "stddev: 0.00006935564700604885",
            "extra": "mean: 247.0383276241674 usec\nrounds: 1810"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1484094.0923929575,
            "unit": "iter/sec",
            "range": "stddev: 2.1351287466292336e-7",
            "extra": "mean: 673.8117246916582 nsec\nrounds: 166639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.13629117686122,
            "unit": "iter/sec",
            "range": "stddev: 0.000551299498751499",
            "extra": "mean: 15.120291479995558 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.061586072497896,
            "unit": "iter/sec",
            "range": "stddev: 0.0014514506252621795",
            "extra": "mean: 21.71006439999843 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.88299804438858,
            "unit": "iter/sec",
            "range": "stddev: 0.000625753064599269",
            "extra": "mean: 204.79221800000005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 153.89781826809553,
            "unit": "iter/sec",
            "range": "stddev: 0.0008483260138479113",
            "extra": "mean: 6.497817910959362 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.2911108464653,
            "unit": "iter/sec",
            "range": "stddev: 0.00010202780973927607",
            "extra": "mean: 6.978799969465573 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8667038383809135,
            "unit": "iter/sec",
            "range": "stddev: 0.0034901898968719",
            "extra": "mean: 1.1537966669999946 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.247123203227932,
            "unit": "iter/sec",
            "range": "stddev: 0.030946207664724446",
            "extra": "mean: 32.00294611110621 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 600380.3891255453,
            "unit": "iter/sec",
            "range": "stddev: 4.0486203753347243e-7",
            "extra": "mean: 1.6656106996707556 usec\nrounds: 21739"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5634.460684202381,
            "unit": "iter/sec",
            "range": "stddev: 0.00004848288870355346",
            "extra": "mean: 177.4792754883799 usec\nrounds: 1844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 150.7179536793765,
            "unit": "iter/sec",
            "range": "stddev: 0.0008920726813441369",
            "extra": "mean: 6.634909614864516 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 147.11614587273036,
            "unit": "iter/sec",
            "range": "stddev: 0.001241389112624498",
            "extra": "mean: 6.797350447619097 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.04150530694979,
            "unit": "iter/sec",
            "range": "stddev: 0.00013290270233947554",
            "extra": "mean: 9.896923021506277 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1531875.8427313478,
            "unit": "iter/sec",
            "range": "stddev: 1.0361419969353056e-7",
            "extra": "mean: 652.7944185195788 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1548901.7287683063,
            "unit": "iter/sec",
            "range": "stddev: 1.6545901566032317e-7",
            "extra": "mean: 645.6187512910872 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.93587544014292,
            "unit": "iter/sec",
            "range": "stddev: 0.016902920945615164",
            "extra": "mean: 8.854582267173459 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5454774.182998102,
            "unit": "iter/sec",
            "range": "stddev: 6.402479434737612e-9",
            "extra": "mean: 183.32564583828793 nsec\nrounds: 52908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7358977944121268,
            "unit": "iter/sec",
            "range": "stddev: 0.0034136352136275023",
            "extra": "mean: 1.3588843553999936 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.544658578928871,
            "unit": "iter/sec",
            "range": "stddev: 0.0006932443688997",
            "extra": "mean: 647.392254600004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.08609972905374,
            "unit": "iter/sec",
            "range": "stddev: 0.0004612432044796874",
            "extra": "mean: 21.69851659999722 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4642.637666994566,
            "unit": "iter/sec",
            "range": "stddev: 0.00005235510735555691",
            "extra": "mean: 215.39479746808559 usec\nrounds: 1659"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12902343071091005,
            "unit": "iter/sec",
            "range": "stddev: 0.09850172404592183",
            "extra": "mean: 7.750530229200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.085579201063668,
            "unit": "iter/sec",
            "range": "stddev: 0.0005272556615487651",
            "extra": "mean: 110.06452949999357 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18877.655596405853,
            "unit": "iter/sec",
            "range": "stddev: 0.00001335901066946197",
            "extra": "mean: 52.972679520140815 usec\nrounds: 4590"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.60049409692283,
            "unit": "iter/sec",
            "range": "stddev: 0.000040782408972897584",
            "extra": "mean: 5.896209237624761 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 612.0271759170089,
            "unit": "iter/sec",
            "range": "stddev: 0.000018599178885424217",
            "extra": "mean: 1.6339143739845963 msec\nrounds: 492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.09182407392845,
            "unit": "iter/sec",
            "range": "stddev: 0.00009851942688246182",
            "extra": "mean: 6.662588093455677 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4567161.685622305,
            "unit": "iter/sec",
            "range": "stddev: 1.3180390173107074e-8",
            "extra": "mean: 218.9543679059221 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 390489.4827357717,
            "unit": "iter/sec",
            "range": "stddev: 2.9718944037750317e-7",
            "extra": "mean: 2.5608884341621545 usec\nrounds: 1954"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 142.86008526843605,
            "unit": "iter/sec",
            "range": "stddev: 0.00010501382462268969",
            "extra": "mean: 6.999855824816193 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.93155518555509,
            "unit": "iter/sec",
            "range": "stddev: 0.002420560280305556",
            "extra": "mean: 29.4710924545453 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9745.155874109312,
            "unit": "iter/sec",
            "range": "stddev: 0.000016756975988320727",
            "extra": "mean: 102.61508516829116 usec\nrounds: 3088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 257.1323397498289,
            "unit": "iter/sec",
            "range": "stddev: 0.00009904144931950477",
            "extra": "mean: 3.889047954733845 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4624.0573692549515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000545238174438755",
            "extra": "mean: 216.2602926704442 usec\nrounds: 2033"
          }
        ]
      }
    ]
  }
}